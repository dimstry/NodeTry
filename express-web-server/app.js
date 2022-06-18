const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //res.send('Hello World!');
 /* res.json({
    nama: "Dimas",
    email: "dimastriana03@gmail.com",
    noHp: "08988224023"
  }); */
  res.sendFile('./index.html', { root : __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root : __dirname});
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root : __dirname});
});

app.get('/product/:id', (req,res) =>{
  res.send(`prodact id : ${req.params.id} <br> Category : ${req.query.Category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


/*
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
*/