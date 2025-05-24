import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";

// Types
import type { RequestHandler } from "express";

// Models
import HttpError from "../models/http-error.ts";

// Utils
import { createMultiMsgHTTPValidationError } from "../globals/helpers.ts";

// Constants
import { BASE_SHELTER, ERROR_MESSAGE, STATUS } from "../globals/constants.ts";

// Dummy data
import { DUMMY_SHELTERS } from "../globals/dummy/dummy-shelters.ts";

const shelters: TShelters = DUMMY_SHELTERS;

export const getShelters: RequestHandler = (_req, res, _next) => {
  res.json(shelters);
};

export const getShelterById: RequestHandler = (req, res, next) => {
  const shelterId = req.params.sid;
  const shelter = shelters.find((s) => s.id === shelterId);

  if (!shelter) {
    next(new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.NOT_FOUND));
    return;
  }

  res.json({ shelter });
};

export const getSheltersByUser: RequestHandler = (req, res, next) => {
  const userId = req.params.uid;
  const filteredShelters = shelters.filter((s) => s.owner === userId);

  if (!filteredShelters || filteredShelters.length === 0) {
    next(new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.NOT_FOUND));
    return;
  }
  res.json({ shelters: filteredShelters });
};

export const createShelter: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    next(
      createMultiMsgHTTPValidationError(
        STATUS.UNPROCESSABLE_CONTENT,
        errors,
        ERROR_MESSAGE.INVALID_INPUTS
      )
    );
  }
  const { owner, name, location } = req.body;
  const createdShelter: TShelter = {
    ...BASE_SHELTER,
    id: uuid(),
    owner,
    name,
    location,
  };

  DUMMY_SHELTERS.push(createdShelter);

  res.status(STATUS.CREATED).json({ shelter: createdShelter });
};

export const updateShelterById: RequestHandler = (req, res, _next) => {
  const shelterId = req.params.sid;
  const shelterIdx = shelters.findIndex((s) => s.id === shelterId);

  DUMMY_SHELTERS[shelterIdx] = {
    ...DUMMY_SHELTERS[shelterIdx],
    ...req.body,
  };

  res.status(STATUS.CREATED).json({ shelter: DUMMY_SHELTERS[shelterIdx] });
};
