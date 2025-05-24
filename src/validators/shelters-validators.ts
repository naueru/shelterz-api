import { checkSchema } from "express-validator";
import type { Schema } from "express-validator";
import { generateErrorMessages } from "../globals/helpers.ts";

export const createShelterSchema: Schema = generateErrorMessages({
  owner: {
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
  name: {
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
  location: {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isObject: {
      errorMessage: "",
    },
  },
  "location.lng": {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isInt: {
      errorMessage: "",
      options: { min: 0, max: 100 },
    },
  },
  "location.lat": {
    in: ["body"],
    exists: {
      errorMessage: "",
      bail: true,
    },
    isInt: {
      errorMessage: "",
      options: { min: 0, max: 100 },
    },
  },
});

const updateShelterSchema: Schema = generateErrorMessages({
  name: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "",
    },
    notEmpty: {
      errorMessage: "",
    },
  },
  "buildings.houses": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.farm": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.school": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.hospital": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.refinery": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.workshop": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.watchTower": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.fence": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.palisade": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "buildings.traps": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },

  "resources.wood": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "resources.food": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "resources.water": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "resources.medicalSupplies": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "resources.fuel": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
  "resources.population": {
    in: ["body"],
    optional: true,
    isInt: {
      errorMessage: "",
    },
    toInt: true,
  },
});

export const createShelterValidator = checkSchema(createShelterSchema);

export const updateShelterValidator = checkSchema(updateShelterSchema);
