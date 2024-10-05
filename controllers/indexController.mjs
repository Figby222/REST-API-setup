const users = {
    1: {
        id: "1",
        username: "CoolGuy123",
    },
    2: {
        id: "2",
        username: "AwesomeSandwich",
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
};

function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
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

export { indexRouteGet, indexRoutePost, indexRoutePut, indexRouteDelete };