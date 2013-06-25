nullplace
=========

Create cross-platform "/dev/null" for Node.js

## How to use

Simply, this module provides two Null device: readable null device and writable null device. You may choose what you want like this:
	
	// writable
	var writable_null = require('nullplace').WritableNullDevice;
	// readable
	var readable_null = require('nullplace').ReadableNullDevice;
	// since each of them is created via `fs.createReadStream` or `fs.createWriteStream`,
	// use them just like normal stream.
	var server = new net.Server();
	server.on('connection', function(cli) {
		cli.pipe(writable_null);
		readable_null.pipe(cli);
	});

	server.listen(0, '::');
