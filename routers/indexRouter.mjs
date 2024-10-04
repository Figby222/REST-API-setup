import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.indexRouteGet);

indexRouter.post("/", indexController.indexRoutePost);

indexRouter.put("/", indexController.indexRoutePut);

export default indexRouter;