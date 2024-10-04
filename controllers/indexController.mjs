function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function indexRoutePost(req, res) {
    return res.send("Received POST HTTP method");
}

function indexRoutePut(req, res) {
    return res.send("Received PUT HTTP method");
}

export { indexRouteGet, indexRoutePost, indexRoutePut };