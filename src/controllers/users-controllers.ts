import { v4 as uuid } from "uuid";

// Types
import type { RequestHandler } from "express";

// Models
import HttpError from "../models/http-error.ts";

// Constants
import { BASE_USER, ERROR_MESSAGE, STATUS } from "../globals/constants.ts";

// Dummy data
import { DUMMY_USERS } from "../globals/dummy/dummy-users.ts";

const users: TUsers = DUMMY_USERS;

export const getUsers: RequestHandler = (_req, res, _next) => {
  const parsedUsers = users.map((u) => ({ id: u.id, userName: u.userName }));
  res.json({ users: parsedUsers });
};

export const signup: RequestHandler = (req, res, next) => {
  const { userName, email, password } = req.body;

  const userExists: boolean = !!users.find((u) => u.email === email);

  if (userExists) {
    next(
      new HttpError(
        ERROR_MESSAGE.EMAIL_ALREADY_IN_USE,
        STATUS.UNPROCESSABLE_CONTENT
      )
    );
    return;
  }

  const createdUser: TUser = {
    ...BASE_USER,
    id: uuid(),
    userName,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(STATUS.CREATED).json({
    id: createdUser.id,
    userName: createdUser.userName,
    image: createdUser.image,
    token: "DUMMY_TOKEN",
  });
};

export const login: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = users.find((u) => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    next(new HttpError(ERROR_MESSAGE.WRONG_CREDENTIALS, STATUS.UNAUTHORIZED));
    return;
  }

  res.json({
    id: identifiedUser.id,
    userName: identifiedUser.userName,
    image: identifiedUser.image,
    token: "DUMMY_TOKEN",
  });
};
