import { Router } from "express";

import * as indexController from "../controllers/indexController.mjs";

const sessionsRouter = Router();

sessionsRouter.get("/", indexController.sessionInfoGet);


export default sessionsRouter;