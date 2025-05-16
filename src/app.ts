import express from "express";
import bodyParser from "body-parser";

import sheltersRoutes from "./routes/shelters-routes.ts";
import { errorHandler } from "./middleware/error-handler.ts";

const app = express();

app.use(bodyParser.json());

app.use("/api/shelters", sheltersRoutes);

app.use(errorHandler);

app.listen(5000);
