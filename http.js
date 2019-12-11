var http = require('http');
var fs = require("fs");

http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World')
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/')

// read txt 阻塞

var data = fs.readFileSync('assets/ixt.txt');
console.log(data.toString())
console.log('执行结束')
console.log('===============================================')
// read txt 非阻塞

fs.readFile('assets/txt.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString())
});
console.log('第二次执行结束')
console.log('===============================================')

