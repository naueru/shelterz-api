import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shelterz-API",
      version: "1.0.0",
      description: "The API for the web based game Shelterz",
    },
    servers: [
      {
        url: "http://localhost:5000", // your API server URL
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/docs/*.ts"], // Path to the API route files with Swagger comments
};

const specs = swaggerJsdoc(options);

export const createSwaggerConf = () => {
  return [swaggerUi.serve, swaggerUi.setup(specs)];
};
