import { validationResult } from "express-validator";
import mongoose, { Types } from "mongoose";

// Types
import type { RequestHandler } from "express";

// Models
import HttpError from "../models/http-error.ts";
import { ShelterModel } from "../models/shelter.ts";

// Utils
import { createMultiMsgHTTPValidationError } from "../globals/helpers.ts";

// Constants
import {
  BASE_SHELTER,
  ERROR_MESSAGE,
  RESPONSE_MESSAGES,
  STATUS,
} from "../globals/constants.ts";
import { UserModel } from "../models/user.ts";

export const getShelters: RequestHandler = async (_req, res, next) => {
  let shelters;
  try {
    shelters = await ShelterModel.find();
  } catch (err) {
    console.log("getShelters", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  res.json({ shelters });
};

export const getShelterById: RequestHandler = async (req, res, next) => {
  const shelterId = req.params.sid;

  let shelter;
  try {
    shelter = await ShelterModel.findById(shelterId);
  } catch (err) {
    console.log("getShelterById", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (!shelter) {
    return;
  }

  res.json({ shelter: shelter.toObject({ getters: true }) });
};

export const getSheltersByUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.uid;

  let shelters;
  try {
    shelters = await ShelterModel.find({ owner: userId });
  } catch (err) {
    console.log("getSheltersByUser", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (!shelters || shelters.length === 0) {
    return next(new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.NOT_FOUND));
  }
  res.json({
    shelters: shelters.map((place) => place.toObject({ getters: true })),
  });
};

export const createShelter: RequestHandler = async (req, res, next) => {
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
  const { name, location } = req.body;
  const owner = req.userData?.userId;

  const createdShelter = new ShelterModel({
    ...BASE_SHELTER,
    owner,
    name,
    location,
  });

  let user;
  try {
    user = await UserModel.findById(owner);
  } catch (err) {
    console.log("createShelter -> findUser", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (!user) {
    return next(new HttpError(ERROR_MESSAGE.USER_NOT_FOUND, STATUS.NOT_FOUND));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await createdShelter.save({ session });
    user.shelters.push(createdShelter.id);
    await user.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log("createShelter -> save", err);
    return next(
      new HttpError(
        ERROR_MESSAGE.SHELTER_CREATION_ERROR,
        STATUS.INTERNAL_SERVER_ERROR
      )
    );
  }
  res
    .status(STATUS.CREATED)
    .json({ shelter: createdShelter.toObject({ getters: true }) });
};

export const updateShelter: RequestHandler = async (req, res, next) => {
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

  const shelterId = req.params.sid;
  const { name } = req.body;

  let shelter;
  try {
    shelter = await ShelterModel.findById(shelterId);
  } catch (err) {
    console.log("updateShelter -> find", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (shelter?.owner.toString() !== req.userData?.userId) {
    return next(
      new HttpError(ERROR_MESSAGE.USER_NOT_ALLOWED, STATUS.FORBIDDEN)
    );
  }

  if (shelter) shelter.name = name;

  try {
    await shelter?.save();
  } catch (err) {
    console.log("updateShelter -> save", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  res
    .status(STATUS.CREATED)
    .json({ shelter: shelter?.toObject({ getters: true }) });
};

export const deleteShelter: RequestHandler = async (req, res, next) => {
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

  const shelterId = req.params.sid;

  if (!Types.ObjectId.isValid(shelterId)) {
    return next(
      new HttpError(
        ERROR_MESSAGE.INVALID_ID_FORMAT,
        STATUS.UNPROCESSABLE_CONTENT
      )
    );
  }

  let shelter;
  try {
    shelter = await ShelterModel.findById(shelterId).populate("owner");
    if (!shelter) {
      return next(
        new HttpError(ERROR_MESSAGE.SHELTER_NOT_FOUND, STATUS.NOT_FOUND)
      );
    }
  } catch (err) {
    console.log("deleteShelter -> findShelter", err);

    return next(
      new HttpError(ERROR_MESSAGE.SERVER_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (shelter?.owner.toString() !== req.userData?.userId) {
    return next(
      new HttpError(ERROR_MESSAGE.USER_NOT_ALLOWED, STATUS.FORBIDDEN)
    );
  }

  if (!shelter)
    return next(
      new HttpError(ERROR_MESSAGE.SHELTER_NOT_FOUND, STATUS.NOT_FOUND)
    );

  let user;
  try {
    user = await UserModel.findById(shelter.owner);
  } catch (err) {
    console.log("deleteShelter -> findUser", err);
    return next(
      new HttpError(ERROR_MESSAGE.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  if (!user) {
    return next(new HttpError(ERROR_MESSAGE.USER_NOT_FOUND, STATUS.NOT_FOUND));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await shelter?.deleteOne({ session });
    (user.shelters as mongoose.Types.Array<mongoose.Types.ObjectId>).pull(
      shelter.id
    );
    await user.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log("deleteShelter -> save", err);
    return next(
      new HttpError(ERROR_MESSAGE.SERVER_ERROR, STATUS.INTERNAL_SERVER_ERROR)
    );
  }

  res
    .status(STATUS.SUCCESS)
    .json({ message: RESPONSE_MESSAGES.DELETED_SHELTER });
};

export const upgradeShelterBuilding: RequestHandler = (req, res, _next) => {
  // Add owner validation
  /* if (shelter?.owner.toString() !== req.userData?.userId) {
    return next(
      new HttpError(ERROR_MESSAGE.USER_NOT_ALLOWED, STATUS.UNAUTHORIZED)
    );
  } */
};

export const upgradeShelterTechnology: RequestHandler = (req, res, _next) => {
  // Add owner validation
  /* if (shelter?.owner.toString() !== req.userData?.userId) {
    return next(
      new HttpError(ERROR_MESSAGE.USER_NOT_ALLOWED, STATUS.UNAUTHORIZED)
    );
  } */
};
