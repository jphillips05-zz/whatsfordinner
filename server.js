var restify = require('restify');

var server = restify.createServer({
	name: 'whatsfordinner',
	version: '0.0.1'
});

server.pre(restify.pre.sanitizePath());

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

var port = process.env.PORT || 3000;

// routes ==================================================
server.get(/\/?.*/, restify.serveStatic({
	directory: './public',
	default: 'index.html',
}));

// start app ===============================================

server.listen(port, function() {
	console.log('Magic happens on port ' + port);
});

exports = module.exports = server;