const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts.js');


const app = express();
const port = 3000;

// mengunakan ejs
app.set("view engine", "ejs");
// therdparty main-layouts
app.use(expressLayouts);

// build in middleware
app.use(express.static('public'));


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

app.get('/about', (req, res,next) => {
 res.render('about', {
    layout: 'layouts/main-layouts',
    tittle: "About"
  }); 
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', {
    layout: 'layouts/main-layouts',
    tittle: "Contact",
    contacts
  });
});
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', {
    layout: 'layouts/main-layouts',
    tittle: "Detail Contact",
   contact
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

