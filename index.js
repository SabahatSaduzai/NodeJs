//const http = require('http'); http.createServer((req, res)=> {if (req.url ==='/') res.end('Hello');  else res.writeHead(404).end();}).listen(3000);
const express = require('express'); const app = express();
app.use(express.json()); 

app.get (`/`, (req,res)=>{
console.log ("Hello World");
});
app.listen(3000); 
