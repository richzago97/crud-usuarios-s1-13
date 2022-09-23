import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";

const loginRoutes = Router();

loginRoutes.post("", createSessionController);

export default loginRoutes;
