const http = require("http");
const fs = require("fs");
const PORT = 5000;

//server create and pass the 2 parameters  req and res
const myServer =  http.createServer((req, res) => {

    //create random number
    const random = Math.floor(Math.random() * 1000);
    const log = `${random} : new number add\n`;

    //appendFile method use
    fs.appendFile("doc.txt", log, () => {
        console.log(req.url);
        
        switch(req.url) {
            case '/':
                res.statusCode = 200;
                res.setHeader('content-Type', 'text/html');
                res.end('<h2>Hello World</h2>');
                break;
            case '/about':
                res.statusCode = 200;
                res.setHeader('content-Type', 'text/html');
                res.end('<h2>About Page</h2>');
                break;
            case '/contact':
                res.statusCode = 200;
                res.setHeader('content-Type', 'text/html');
                res.end('<h2>Contact Page</h2>');
                break;
            default:
                res.statusCode = 404;
                res.setHeader('content-Type', 'text/html');
                res.end('<h2>Page Not Found</h2>');
        }
    });
})
//server listen on port 5000
myServer.listen(PORT, () => {
    console.log(`server is runing http://localhost:${PORT}`);
});