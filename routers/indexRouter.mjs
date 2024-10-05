import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/users", indexController.indexRouteGet);

indexRouter.get("/users/:userId", indexController.userDetailsGet);

indexRouter.post("/users", indexController.indexRoutePost);

indexRouter.put("/users/:userId", indexController.indexRoutePut);

indexRouter.delete("/users/:userId", indexController.indexRouteDelete);

indexRouter.get("/messages", indexController.messagesListGet);

indexRouter.get("/messages/:messageId", indexController.messageDetailsGet);

indexRouter.post("/messages", indexController.createMessagePost);



export default indexRouter;