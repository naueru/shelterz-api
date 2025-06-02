import mongoose from "mongoose";

// Types
import type { IUser } from "../types/users-types";

// Validators
import uniqueValidatorPlugin from "../plugins/custom/mongooseUniqueValidator.ts";

const userSchema = new mongoose.Schema<IUser>({
  userName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  shelters: [
    {
      type: Array<mongoose.Schema.Types.ObjectId>,
      ref: "Shelter",
    },
  ],
});

userSchema.plugin(uniqueValidatorPlugin);

export const UserModel = mongoose.model("User", userSchema);
