import { v4 as uuidv4 } from "uuid";

function indexRouteGet(req, res) {
    res.send(Object.values(req.models.users));
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
    res.send(Object.values(req.models.messages))
}

function messageDetailsGet(req, res) {
    res.send(req.models.messages[req.params.messageId])
}

function createMessagePost(req, res) {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    }

    req.models.messages[id] = message;
    res.send(message);
}

function messageDelete(req, res) {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.models.messages;

    req.models.messages = otherMessages;

    res.send(message);
}

function sessionInfoGet(req, res) {
    res.send(req.models.users[req.me.id])
}

export { indexRouteGet, indexRoutePost, indexRoutePut, indexRouteDelete, userDetailsGet, messagesListGet, messageDetailsGet, createMessagePost, messageDelete, sessionInfoGet };