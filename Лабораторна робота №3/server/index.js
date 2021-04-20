const http = require("http");
let port = 8080;
var url = require("url");
var fs = require("fs");

let requestHandler = (request, response) => {
  let q = url.parse(request.url, true);
  console.log(q.pathname);

  if (q.pathname !== "/favicon.ico") {
    fs.appendFile("logs.txt", port + q.pathname + "\n", function(err){
      if (err) throw err;
    });
  }

  if (q.pathname == "/contacts") {
    response.writeHead(404, { "Content-Type": "text/html" });
    return response.end("404 Not Found");
  }

  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  response.write(`Server started at port ${port}!`);
  response.end();
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log("Error:", err);
  }
  console.log(`Server started at port ${port}`);
});
