
var http = require('http')
 
http.createServer((req,res)=>{
    res.end("<h1>hello dheeraj bhaisa </h1>")

}).listen(22110)
console.log("Server is started on http://127.0.0.1:22110");