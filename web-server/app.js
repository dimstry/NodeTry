const http = require('http');
const port= 3000;
const fs = require('fs');

const renderHtml = (path, res) => {
    fs.readFile(path, (err , data) => {
    if(err) {
      res.writeHead(404);
      res.write('error : file not found');
    }else {
      res.write(data);
    }
    res.end();
  });
}


const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html',
  });
  const url = req.url;
  if (url === '/about') {
    renderHtml('./about.html' , res);
  }else if(url === '/contact') {
    res.write("Ini contact");
    res.end();
  }else {
    // res.write("Hello Word");
    renderHtml('./index.html' , res);
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});