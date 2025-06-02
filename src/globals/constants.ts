// Types
import type { TShelter } from "../types/shelters-types";
import type { TUser } from "../types/users-types";

export const STATUS = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_CONTENT: 422,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
  SUCCESS: 200,
};

export const RESPONSE_MESSAGES = {
  DELETED_SHELTER: "Deleted shelter",
};

export const ERROR_MESSAGE = {
  ERROR: "An unknown error ocurred.",
  NOT_FOUND: "Not found.",
  ROUTE_NOT_FOUND: "Could not find this route.",
  WRONG_CREDENTIALS: "Could not identify user. Check credentials.",
  EMAIL_ALREADY_IN_USE: "Could not create user, email already in use.",
  INVALID_INPUTS: "Invalid inputs, please check your data.",
  INVALID_ID_FORMAT: "Invalid id format.",
  SERVER_ERROR: "Internal server error.",
  SIGNUP_ERROR: "Signup failed, please try again later.",
  LOGIN_ERROR: "Login failed, please try again later.",
  SHELTER_CREATION_ERROR: "Failed creating shelter, please try again later.",
  USER_NOT_FOUND: "Could not find user for the provided id",
  SHELTER_NOT_FOUND: "Could not find shelter for the provided id",
  AUTHENTICATION_FAILED: "Authentication failed",
};

export const VALIDATION_ERROR_MESSAGE = {
  PROPERTY_IS_REQUIRED: "{{ property }} is required.",
  PROPERTY_MUST_BE_TYPE: "{{ property }} must be {{ type }}.",
  PROPERTY_CANT_BE_EMPTY: "{{ property }} can not be empty.",
  EMAIL_MUST_BE_VALID: "Email must be valid",
};

export const BASE_SHELTER: TShelter = {
  id: "",
  owner: "",
  name: "",
  location: {
    lat: 0,
    lng: 0,
  },
  buildings: {
    houses: 1,
    farm: 0,
    school: 0,
    hospital: 0,
    refinery: 0,
    workshop: 0,
    watchTower: 0,
    fence: 1,
    palisade: 0,
    traps: 0,
  },
  resources: {
    wood: 0,
    food: 0,
    water: 0,
    medicalSupplies: 0,
    fuel: 0,
    population: 0,
  },
};

export const BASE_USER: TUser = {
  id: "",
  userName: "",
  email: "",
  password: "",
  image: "",
};
