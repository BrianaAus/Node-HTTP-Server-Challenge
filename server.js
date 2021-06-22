const http = require("http"); // allows your server to make use of HTTP methods, or allows your server to respond to request

// YOUR NODE SERVER CODE GOES HERE
const PORT = 3000
const HOST = "127.0.0.1"
//create the server 
//http.createServer --> invoking the create server method on the http module
//takes two arguments
const server = http.createServer((request, response) => {
    response.end("Hello Galvanize"); //server started successfully 

});

//invoke the listen() method on the server you created
//few arguments: a PORT, a HOST(localhost), and a callbackfunction
server.listen(PORT, HOST, () => {
    console.log(`Server running at ${HOST}:${PORT}`); 
  });
//http://127.0.0.1:3000/
