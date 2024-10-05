import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/messages", indexController.messagesListGet);

indexRouter.get("/messages/:messageId", indexController.messageDetailsGet);

indexRouter.post("/messages", indexController.createMessagePost);

indexRouter.delete("/messages/:messageId", indexController.messageDelete);

export default indexRouter;