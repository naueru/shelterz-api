import express, { Router } from "express";

// Controllers
import {
  createShelter,
  getShelterById,
  getShelters,
  getSheltersByUser,
  updateShelterById,
} from "../controllers/shelters-controllers.ts";

// Validators
import {
  createShelterValidator,
  updateShelterValidator,
} from "../validators/shelters-validators.ts";

const sheltersRoutes: Router = express.Router();

sheltersRoutes.get("/", getShelters);

sheltersRoutes.get("/:sid", getShelterById);

sheltersRoutes.get("/user/:uid", getSheltersByUser);

sheltersRoutes.post("/", createShelterValidator, createShelter);

sheltersRoutes.patch("/:sid", updateShelterById);

export default sheltersRoutes;
