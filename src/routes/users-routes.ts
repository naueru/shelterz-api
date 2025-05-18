import express, { Router } from "express";

// Controllers
import { getUsers, signup, login } from "../controllers/users-controllers.ts";

const usersRoutes: Router = express.Router();

usersRoutes.get("/", getUsers);

usersRoutes.post("/signup", signup);

usersRoutes.post("/login", login);

export default usersRoutes;
