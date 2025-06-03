import jwt from "jsonwebtoken";

// Types
import type { JwtPayload } from "jsonwebtoken";
import type { RequestHandler } from "express";

// Models
import HttpError from "../models/http-error.ts";

// Constants
import { ERROR_MESSAGE, STATUS } from "../globals/constants.ts";

export const checkAuth: RequestHandler = (req, _res, next) => {
  if (req.method === "OPTIONS") return next();

  try {
    const token = req.headers.authorization?.split(" ")[1]; // Authorization: 'Bearer Token'

    if (!token || !process.env.JWT_SECRET) {
      throw new HttpError(
        ERROR_MESSAGE.AUTHENTICATION_FAILED,
        STATUS.UNAUTHORIZED
      );
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as JwtPayload & { userId: string };
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {}
  return next(
    new HttpError(ERROR_MESSAGE.AUTHENTICATION_FAILED, STATUS.FORBIDDEN)
  );
};
