// Types
import type { ErrorRequestHandler } from "express";

// Constants
import { ERROR_MESSAGE } from "../globals/constants.ts";

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500); // Sets default code if not set
  res.json({ message: error.message || ERROR_MESSAGE.ERROR }); // Sets default message if not set
};
