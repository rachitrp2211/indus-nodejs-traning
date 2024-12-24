var http = require('http')
var a= 100
var b = 200
var c = a+b
var msg
if(c==30){
    msg = "sum is 30"
}
else{
    msg = "sum is not 30"
}

http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("A value is "+a)
    res.write("<br>B value is "+b)
    res.write(`<br>The sum of a and B is ${a+b}`)
    res.end("<br>"+msg+ "<br><b>done</b>")
}).listen(4001)
console.log("the server http://127.0.0.1:4001");


// var http = require('http')
 
// http.createServer((req,res)=>{
//     res.end("<h1>hello dheeraj bhaisa </h1>")

// }).listen(22110)
// console.log("Server is started on http://127.0.0.1:22110");