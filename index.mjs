import express from "express";
const app = express();
import indexRouter from "./routers/indexRouter.mjs";
import "dotenv/config";
import path from "node:path";
import session from "./config/expressSession.mjs";
import passport from "./config/passport.mjs";
import models from "./models/index.mjs";

const __dirname = import.meta.dirname;

function setModels(req, res, next) {
    req.context = {
        models,
        me: models.users[4],
    }
    next();
}

function myMiddleware(req, res, next) {
    req.me = req.models.users[4];
    next();
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session);
app.use(passport.session());
app.use(myMiddleware);
app.use(setModels);




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})