const fs= require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);


    const url = req.url;
    const method =req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter messege</title></head>');
        res.write('<body><form action="/message" method="POST"><input tyoe="text" name="message" ><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST' ) {
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<head><title> Enter messege</title></head>');
    res.write('<body><h1>Hellp from my Node.js</h1></body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000);
// fs.writeFileSync('hello.txt','Hello from Node.js');