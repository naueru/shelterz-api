// Core
import express from "express";
import dotenv from "dotenv";

// Middlewares
import bodyParser from "body-parser";
import { errorHandler, routeNotFound } from "./middleware/error-handler.ts";
import { createSwaggerConf } from "./middleware/swagger.ts";
import { corsHandler } from "./middleware/cors.ts";

// Routes
import sheltersRoutes from "./routes/shelters-routes.ts";
import usersRoutes from "./routes/users-routes.ts";

dotenv.config();

import "./mongoose.ts";

const app = express();

app.use("/api-docs", ...createSwaggerConf());

app.use(bodyParser.json());

app.use(corsHandler);

app.use("/api/shelters", sheltersRoutes);
app.use("/api/users", usersRoutes);

app.use(routeNotFound);

app.use(errorHandler);

app.listen(process.env.PORT);
