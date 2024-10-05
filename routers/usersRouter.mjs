import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const usersRouter = Router();

usersRouter.get("/", indexController.indexRouteGet);

usersRouter.get("/:userId", indexController.userDetailsGet);

usersRouter.post("/", indexController.indexRoutePost);

usersRouter.put("/:userId", indexController.indexRoutePut);

usersRouter.delete("/:userId", indexController.indexRouteDelete);

export default usersRouter;