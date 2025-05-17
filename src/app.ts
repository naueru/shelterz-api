// Core
import express from "express";

// Middlewares
import bodyParser from "body-parser";
import { errorHandler, routeNotFound } from "./middleware/error-handler.ts";
import { createSwaggerConf } from "./middleware/swagger.ts";

// Routes
import sheltersRoutes from "./routes/shelters-routes.ts";

const app = express();

app.use("/api-docs", ...createSwaggerConf());

app.use(bodyParser.json());

app.use("/api/shelters", sheltersRoutes);

app.use(routeNotFound);

app.use(errorHandler);

app.listen(5000);
