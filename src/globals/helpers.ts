import type { Result, Schema, ValidationError } from "express-validator";
import type { DefaultSchemaKeys } from "express-validator/lib/middlewares/schema";
import HttpError from "../models/http-error.ts";
import { VALIDATION_ERROR_MESSAGE } from "./constants.ts";

export const createMultiMsgHTTPValidationError = (
  code: number,
  results: Result<ValidationError>,
  baseError: string = ""
) => {
  const errors = results.array().map((error) => `${error.msg}`);
  if (baseError) errors.unshift(baseError);
  return new HttpError(errors.join(", "), code);
};

export const replaceMustache = (str: string, data: IObject) => {
  return str.replace(
    /\{\{\s*(\w+)\s*\}\}/g,
    (match, key) => data[key] || match
  );
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateErrorMessages = (schema: Schema = {}) => {
  const newSchema = schema;
  const keys = Object.keys(newSchema);
  keys.forEach((key) => {
    const rules: DefaultSchemaKeys[] = Object.keys(
      newSchema[key]
    ) as DefaultSchemaKeys[];
    rules.forEach((rule) => {
      if (newSchema?.[key]?.[rule]?.hasOwnProperty?.("errorMessage")) {
        const keyLabel = key.split(".").pop() || "";
        switch (rule) {
          case "notEmpty":
            if (typeof newSchema[key][rule] !== "boolean")
              newSchema[key][rule].errorMessage = replaceMustache(
                VALIDATION_ERROR_MESSAGE.PROPERTY_CANT_BE_EMPTY,
                { property: capitalize(keyLabel) }
              );
            break;
          case "exists":
            if (typeof newSchema[key][rule] !== "boolean")
              newSchema[key][rule].errorMessage = replaceMustache(
                VALIDATION_ERROR_MESSAGE.PROPERTY_IS_REQUIRED,
                { property: capitalize(keyLabel) }
              );
            break;
          case "isEmail":
            if (typeof newSchema[key][rule] !== "boolean")
              newSchema[key][rule].errorMessage =
                VALIDATION_ERROR_MESSAGE.EMAIL_MUST_BE_VALID;
            break;
          default:
            newSchema[key][rule].errorMessage = replaceMustache(
              VALIDATION_ERROR_MESSAGE.PROPERTY_MUST_BE_TYPE,
              {
                property: capitalize(keyLabel),
                type: rule.slice(2),
              }
            );
            break;
        }
      }
    });
  });
  return newSchema;
};
