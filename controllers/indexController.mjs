function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

function indexRoutePost(req, res) {
    return res.send("Received POST HTTP method");
}

export { indexRouteGet, indexRoutePost };