import express, { Router } from "express";

// Middlewares
import { checkAuth } from "../middleware/check-auth.ts";

// Controllers
import {
  createShelter,
  getShelterById,
  getShelters,
  getSheltersByUser,
  deleteShelter,
  upgradeShelterBuilding,
  upgradeShelterTechnology,
  updateShelter,
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

sheltersRoutes.use(checkAuth);

sheltersRoutes.post("/", createShelterValidator, createShelter);

sheltersRoutes.patch("/:sid", updateShelterValidator, updateShelter);

sheltersRoutes.patch("/:sid/upgrade/building/:bid", upgradeShelterBuilding);

sheltersRoutes.patch("/:sid/upgrade/technology/:tid", upgradeShelterTechnology);

sheltersRoutes.delete("/:sid", updateShelterValidator, deleteShelter);

export default sheltersRoutes;
