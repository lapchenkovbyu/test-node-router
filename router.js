const controllerFactory = require('./controllerFactory');
const parser = require('url');
let routes = [];

exports.clear = function () {
    routes = [];
}

exports.register = function (method, url, action) {
    routes[method + url] = controllerFactory.createController(action);
}

exports.route = function (req) {
    url = parser.parse(req.url, true);
    let route = routes[req.method + url.pathname];
    if (!route) route = this.missing(req)
    return route;
}

exports.missing = function (req) {
    return controllerFactory.createController(function (req, res) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("No route registered for " + req.method + url.pathname);
        res.end();
    });
}
