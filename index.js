const process = require('process');
const http = require('http');
const router = require('./router');

router.register('GET', '/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is a test response for GET /');
    res.end();
});

router.register('POST', '/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is a test response for POST /');
    res.end();
});

const server = http.createServer(function (req, res) {
    routes = router.route(req);
    routes.process(req, res);
});

server.listen(8000);
process.stdout.write('Server running');
