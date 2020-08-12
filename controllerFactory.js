exports.createController = function (method) {
    return new Controller(method);
}

Controller = function (method) {
    this.process = function (req, res) {
        let params = null;
        return method.apply(this, [req, res, params]);
    }
}
