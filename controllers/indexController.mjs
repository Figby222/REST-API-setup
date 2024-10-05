import { v4 as uuidv4 } from "uuid";

const users = {
    1: {
        id: "1",
        username: "CoolGuy123",
    },
    2: {
        id: "2",
        username: "AwesomeSandwich",
    },
    3: {
        id: "3",
        username: "SandwichGuy",
    },
    4: {
        id: "4",
        username: "SandwichCookies",
    },
};

const messages = {
    1: {
        id: "1",
        text: "Hello Sandwich",
        userId: "1",
    },
    2: {
        id: "2",
        text: "Hello CoolGuy",
        userId: "2",
    },
    3: {
        id: "3",
        text: "Hello Cookies",
        userId: "3"
    },
    4: {
        id: "4",
        text: "Hello Sandwich",
        userId: "4",
    },
};

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

export { indexRouteGet, indexRoutePost, indexRoutePut, indexRouteDelete, userDetailsGet, messagesListGet, messageDetailsGet, createMessagePost, myMiddleware };