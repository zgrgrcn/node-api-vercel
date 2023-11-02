// load the module and display its version
var talib = require('./build/Release/talib');
console.log("TALib Version: " + talib.version);

// Display all available indicator function names
var functions = talib.functions;
for (i in functions) {
	console.log(functions[i].name);
}