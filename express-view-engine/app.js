const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// mengunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get('/', (req, res) => {
 // res.sendFile('./index.html', { root : __dirname});
 const siswa = [
    {
     nama: "Dimas",
     kelas: "XII RPL"
    },
    {
     nama: "Kresna",
     kelas: "XII RPL"
    },
   ];
   
 res.render('index', {
   layout: 'layouts/main-layouts',
   nama: "Dimas",
   tittle: "Home",
   siswa
 });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layouts',
    tittle: "About"
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layouts',
    tittle: "Contact"
  });
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

