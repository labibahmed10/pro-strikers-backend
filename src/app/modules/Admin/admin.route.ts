import express from "express";
import auth from "../../middlewares/auth";
import { AdminControllers } from "./admin.controller";
import { USER_ROLE } from "../USER/user.constant";

const router = express.Router();

router.get(
  "/",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getAllAdmins,
);

router.get(
  "/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getSingleAdmin,
);

export const AdminRoutes = router;
