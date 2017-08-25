const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<h1>Forside</h1><a href="http://www.facebook.com">Link Måske?</a>');
			res.end();
		} else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};