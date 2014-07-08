var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');

http.createServer(function(req,res){
	var filePath = path.join(__dirname, url.parse(req.url).pathname);
	if (!fs.existsSync(filePath)) {
		res.statusCode = 404;
		res.end();
	} else {
		fs.createReadStream(filePath).pipe(res);
	}
}).listen(8080);
console.log("Web server running on port 8080");