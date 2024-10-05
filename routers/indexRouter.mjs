import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/users", indexController.indexRouteGet);

indexRouter.post("/users", indexController.indexRoutePost);

indexRouter.put("/users", indexController.indexRoutePut);

indexRouter.delete("/users", indexController.indexRouteDelete);

export default indexRouter;