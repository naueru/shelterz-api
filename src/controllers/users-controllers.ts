import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

// Types
import type { RequestHandler } from "express";

// Models
import HttpError from "../models/http-error.ts";
import { UserModel } from "../models/user.ts";

// Utils
import { createMultiMsgHTTPValidationError } from "../globals/helpers.ts";

// Constants
import { ERROR_MESSAGE, STATUS } from "../globals/constants.ts";

export const getUsers: RequestHandler = async (_req, res, next) => {
  let users;
  try {
    users = await UserModel.find({}, "-password");
  } catch (err) {
    console.log("signup -> find", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

export const signup: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      createMultiMsgHTTPValidationError(
        STATUS.UNPROCESSABLE_CONTENT,
        errors,
        ERROR_MESSAGE.INVALID_INPUTS
      )
    );
  }

  const { userName, email, password, image } = req.body;

  let existingUser;
  try {
    existingUser = await UserModel.findOne({ email: email });
  } catch (err) {
    console.log("signup -> find", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (existingUser) {
    return next(
      new HttpError(
        ERROR_MESSAGE.EMAIL_ALREADY_IN_USE,
        STATUS.UNPROCESSABLE_CONTENT
      )
    );
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    console.log("signup -> save", err);
    return next(
      new HttpError(ERROR_MESSAGE.SIGNUP_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  const createdUser = new UserModel({
    userName,
    email,
    password: hashedPassword,
    image,
    shelters: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.log("signup -> save", err);
    return next(
      new HttpError(ERROR_MESSAGE.SIGNUP_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  let token;
  try {
    if (process.env.JWT_SECRET) {
      token = jwt.sign(
        { userId: createdUser.id, email: createdUser.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
    }
  } catch (err) {
    console.log("signup -> jwt", err);
    return next(
      new HttpError(ERROR_MESSAGE.SIGNUP_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }
  res.status(STATUS.CREATED).json({
    user: {
      userId: createdUser.id,
      userName: createdUser.userName,
      email: createdUser.email,
      image: createdUser.image,
      token,
    },
  });
};

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await UserModel.findOne({ email: email });
  } catch (err) {
    console.log("login -> find", err);
    return next(
      new HttpError(ERROR_MESSAGE.LOGIN_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (!user) {
    return next(
      new HttpError(ERROR_MESSAGE.WRONG_CREDENTIALS, STATUS.UNAUTHORIZED)
    );
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, user.password);
  } catch (err) {
    console.log("login -> compare password", err);
    return next(
      new HttpError(
        ERROR_MESSAGE.WRONG_CREDENTIALS,
        STATUS.INTERNAL_SERVER_ERROR
      )
    );
  }

  if (!isValidPassword) {
    return next(
      new HttpError(ERROR_MESSAGE.WRONG_CREDENTIALS, STATUS.FORBIDDEN)
    );
  }

  let token;
  try {
    if (process.env.JWT_SECRET) {
      token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
    }
  } catch (err) {
    console.log("signup -> jwt", err);
    return next(
      new HttpError(ERROR_MESSAGE.SIGNUP_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }
  res.json({
    user: {
      userId: user.id,
      userName: user.userName,
      email: user.email,
      image: user.image,
      token,
    },
  });
};
