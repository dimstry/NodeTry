const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}
// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]' , 'utf-8')
}

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

const simpanContacts = (nama, email, noHp) => {
  
  const contact = { nama, email, noHp};
  const contacts = loadContact();
  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if(duplikat){
    console.log(chalk.red.inverse.bold("sudah terdaftar,gunakan nama lain"));
    return false
  }
  
  //cek email 
  if(email){
    if(!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Asupkeun email nu bener")); 
      return false
    }
  }
  
  // cek no hp
  if(!validator.isMobilePhone(noHp, 'id-ID')) {
    console.log(chalk.red.inverse.bold("Asupkeun no hp nu bener")); 
    return false
   }
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold('terimakasih'))
}
// lihat list
const listcontacts = () => {
  const contacts = loadContact();
  console.log(chalk.blue.inverse.bold('DAFTAR CONTACTS'))
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  })
}
// melihat detail
const detailcontacts = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
  if(!contact) {
    console.log(chalk.red.inverse.bold(`${nama} Tidak ada`));
    return false;
  }
  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(chalk.cyan.inverse.bold(contact.noHp));
  if (contact.email) {
    console.log(chalk.cyan.inverse.bold(contact.email));
  }
}

//hapus
const delatecontacts = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())
  
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false
  }
  
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
  console.log(chalk.green.inverse.bold(`data kontak ${nama} di hapus`))
}

module.exports = {
 simpanContacts,
 listcontacts,
 detailcontacts,
 delatecontacts
}