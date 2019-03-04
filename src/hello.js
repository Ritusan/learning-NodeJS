const http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('hello')
}).listen(8000)
console.log('server http://127.0.0.1:8000/')
// console.log(1)