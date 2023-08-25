var http = require('http');   //require is a function used to call any module

// http allows node.js to transfer data over the HTTP

var A = 10;
var B = 20;
var C = A + B;

http.createServer(function(req, res) {  //by default res consider as a string
    res.writeHead(200, {'Content-Type': 'text/html'});    //type of content shown on server/browser will be of html type

    // to print multiple line we used res.write
    res.write("A value is " +  A + "<br/>");
    res.write("B value is " +  B + "<br/>");
    res.write("Sum value is " +  C + "<br/>");

    // if there is last line or it is end we used res.end
                //  or
    //res.end to terminate the response
    res.end("Hello world");
}).listen(3000);

console.log("Server is running on port 3000");