import express from "express";
import { AuthRoutes } from "../modules/AUTH/auth.route";
import { userRoutes } from "../modules/USER/user.route";
const router = express.Router();

const mainRoutes = [
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/",
    route: AuthRoutes,
  },
];

mainRoutes.forEach(route => router.use(route.path, route.route));

export default router;
