const http = require("http")

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req,res)=>{
   if (req.url === "/") {
     res.statusCode = 200;
     res.setHeader('Content-Type', "text/plain")
     res.end("This is the end!!")
   }
    else if (req.url === "/login") {
     res.statusCode = 200;
     res.setHeader('Content-Type', "text/plain")
     res.end("You are logged in")
   }
    else{
     res.statusCode = 404;
     res.setHeader('Content-Type', "text/plain")
     res.end("Not found anything!!")
   }
})

server.listen(port,hostname,()=>{
    console.log(`Server is listening on http://${hostname}:${port}`)
})