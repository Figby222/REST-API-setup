import { v4 as uuidv4 } from "uuid";

function myMiddleware(req, res, next) {
    req.me = users[4];
    next();
}

function indexRouteGet(req, res) {
    res.send(Object.values(users));
    // res.render("index", { title: "Node Template" });
}

function userDetailsGet(req, res) {
    res.send(users[req.params.userId])
}

function indexRoutePost(req, res) {
    return res.send("Received POST HTTP method");
}

function indexRoutePut(req, res) {
    return res.send(`Received PUT HTTP method for user with id: ${req.params.userId}`);
}

function indexRouteDelete(req, res) {
    return res.send(`Received DELETE HTTP method for user with id: ${req.params.userId}`);
}

function messagesListGet(req, res) {
    res.send(Object.values(messages))
}

function messageDetailsGet(req, res) {
    res.send(messages[req.params.messageId])
}

function createMessagePost(req, res) {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id,
    }

    messages[id] = message;
    res.send(message);
}

function messageDelete(req, res) {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = messages;

    messages = otherMessages;

    res.send(message);
}

function sessionInfoGet(req, res) {
    res.send(users[req.me.id])
}

export { indexRouteGet, indexRoutePost, indexRoutePut, indexRouteDelete, userDetailsGet, messagesListGet, messageDetailsGet, createMessagePost, myMiddleware, messageDelete, sessionInfoGet };