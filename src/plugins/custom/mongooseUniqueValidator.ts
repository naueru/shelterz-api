import mongoose, { Schema, Document } from "mongoose";

type HookNextFunction = (err?: any) => void;

interface UniqueValidatorOptions {
  message?: string;
}

function uniqueValidatorPlugin(
  schema: Schema,
  options?: UniqueValidatorOptions
) {
  const message =
    options?.message ||
    "Error, expected `{PATH}` to be unique. Value: `{VALUE}`";

  // Find paths with unique: true
  const uniquePaths = Object.entries(schema.paths)
    .filter(([_, path]) => path.options && path.options.unique)
    .map(([pathName]) => pathName);

  // Pre-validate hook to check uniqueness
  schema.pre("save", async function (next: HookNextFunction) {
    const doc = this as Document;

    try {
      for (const path of uniquePaths) {
        const value = doc.get(path);
        if (value == null) continue;

        // Build query to find duplicates excluding current doc (if updating)
        const query: any = { [path]: value };
        if (!doc.isNew) {
          query._id = { $ne: doc._id };
        }

        const existing = await (
          doc.constructor as mongoose.Model<Document>
        ).countDocuments(query);
        if (existing > 0) {
          const err = new mongoose.Error.ValidatorError({
            message: message.replace("{PATH}", path).replace("{VALUE}", value),
            path,
            value,
            type: "unique",
          });
          return next(err);
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  });

  // Also handle findOneAndUpdate and updateOne
  async function checkUniqueOnUpdate(this: any, next: HookNextFunction) {
    try {
      const update = this.getUpdate();
      if (!update) return next();

      for (const path of uniquePaths) {
        if (update[path] == null) continue;

        const value = update[path];
        const query: any = { [path]: value };

        // Exclude current doc by _id if available
        if (this.getQuery()._id) {
          query._id = { $ne: this.getQuery()._id };
        }

        const existing = await this.model.countDocuments(query);
        if (existing > 0) {
          const err = new mongoose.Error.ValidatorError({
            message: message.replace("{PATH}", path).replace("{VALUE}", value),
            path,
            value,
            type: "unique",
          });
          return next(err);
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  schema.pre("findOneAndUpdate", checkUniqueOnUpdate);
  schema.pre("updateOne", checkUniqueOnUpdate);
}

export default uniqueValidatorPlugin;
