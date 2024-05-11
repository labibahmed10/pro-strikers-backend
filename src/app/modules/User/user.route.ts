/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createAdminValidationSchema } from "../ADMIN/admin.validation";
import { UserControllers } from "./user.controller";
import { createNormalUserValidationSchema } from "../NormalUser/normalUser.validation";
import { USER_ROLE } from "./user.constant";
import auth from "../../middlewares/auth";

export const userRoutes = express.Router();

userRoutes.post(
  "/create-user",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  validateRequest(createNormalUserValidationSchema),
  UserControllers.createNormalUser,
);

userRoutes.post(
  "/create-admin",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  //  (req: Request, res: Response, next: NextFunction) => {
  //     req.body = JSON.parse(req.body.data);
  //     next();
  //   },
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
