import express from "express";
import "dotenv/config";
import userRouter from "./routes/users.routes";
import loginRoutes from "./routes/session.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/login", loginRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
   console.log(`server is running at port ${PORT}`);
});

export default app;
