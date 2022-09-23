import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listProfileController,
  listUserController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdminMiddleware from "../middlewares/isAdmin.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
const userRoutes = Router();

userRoutes.post("", verifyEmailAvailabilityMiddleware, createUserController);
userRoutes.get("", ensureAuthMiddleware, isAdminMiddleware, listUserController);
userRoutes.get("/profile", ensureAuthMiddleware, listProfileController);
userRoutes.delete(
  "/:uuid",
  ensureAuthMiddleware,
  isAdminMiddleware,
  deleteUserController
);
userRoutes.patch(
  "/:uuid",
  ensureAuthMiddleware,
  isAdminMiddleware,
  updateUserController
);

export default userRoutes;
