interview question of node 

-----------------------------------------------------------------
node js server side code:
browser

module :
Core modeule
	by default node installed 
	example:http,fs
local module 
	create module 
	example: database connection 
third party module 
	library 
		expressjs
-----------------------------------------------------------------
create server

var http = require('http')
 
http.createServer((req,res)=>{
    res.end("<h1>hello dheeraj bhaisa </h1>")

}).listen(22110)
console.log("Server is started on http://127.0.0.1:22110");
-----------------------------------------------------------------
 