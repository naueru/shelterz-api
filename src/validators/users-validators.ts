import { checkSchema } from "express-validator";
import { generateErrorMessages } from "../globals/helpers.ts";

const signupSchema = generateErrorMessages({
  userName: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isString: {
      errorMessage: "",
    },
    notEmpty: {
      errorMessage: "User name cannot be empty",
    },
  },
  email: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isString: {
      errorMessage: "",
    },
    notEmpty: {
      errorMessage: "",
    },
    isEmail: {
      errorMessage: "",
    },
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isString: {
      errorMessage: "",
    },
  },
  image: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "",
    },
  },
});

const loginSchema = generateErrorMessages({
  email: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isString: {
      errorMessage: "",
    },
    notEmpty: {
      errorMessage: "",
    },
    isEmail: {
      errorMessage: "",
    },
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isString: {
      errorMessage: "",
    },
    notEmpty: {
      errorMessage: "",
    },
  },
});

export const signupValidator = checkSchema(signupSchema);

export const loginValidator = checkSchema(loginSchema);
