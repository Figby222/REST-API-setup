function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function indexRoutePost(req, res) {
    return res.send("Recieved POST HTTP method");
}

function indexRoutePut(req, res) {
    return res.send("Recieved PUT JTTP method");
}

export { indexRouteGet, indexRoutePost, indexRoutePut };