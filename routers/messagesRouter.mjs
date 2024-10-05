import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const messagesRouter = Router();

messagesRouter.get("/", indexController.messagesListGet);

messagesRouter.get("/:messageId", indexController.messageDetailsGet);

messagesRouter.post("/", indexController.createMessagePost);

messagesRouter.delete("/:messageId", indexController.messageDelete);

export default messagesRouter;