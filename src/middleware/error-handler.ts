// Models
import HttpError from "../models/http-error.ts";

// Types
import type { ErrorRequestHandler, RequestHandler } from "express";

// Constants
import { ERROR_MESSAGE, STATUS } from "../globals/constants.ts";

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500); // Sets default code if not set
  res.json({ message: error.message || ERROR_MESSAGE.ERROR }); // Sets default message if not set
};

export const routeNotFound: RequestHandler = (_req, _res, _next) => {
  const error = new HttpError(ERROR_MESSAGE.ROUTE_NOT_FOUND, STATUS.NOT_FOUND);
  throw error;
};
