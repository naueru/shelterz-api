// Core
import express from "express";

// Middlewares
import bodyParser from "body-parser";
import { errorHandler, routeNotFound } from "./middleware/error-handler.ts";

// Routes
import sheltersRoutes from "./routes/shelters-routes.ts";

const app = express();

app.use(bodyParser.json());

app.use("/api/shelters", sheltersRoutes);

app.use(routeNotFound);

app.use(errorHandler);

app.listen(5000);
