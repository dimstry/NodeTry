const yargs = require("yargs");
const contacts = require('./contacts');
// mengambil argumen dari command line
yargs.command({
  command: 'add',
  describe: 'menambah contacts',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Alamat email',
      demandOption: false,
      type: 'string'
    },
    noHp: {
      describe: 'No handphone',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.simpanContacts(argv.nama, argv.email, argv.noHp);
  },
})
.demandCommand();

//menampilkan daftar semua contacts
yargs.command({
  command: 'list',
  describe: 'menampilkan semua list pada contact',
  handler(){
    contacts.listcontacts();
  },
})

// menampilkan detail sebuah contacts
yargs.command({
  command: 'detail',
  describe: 'menampilkan detail sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.detailcontacts(argv.nama);
  },
})
// menghapus kontak berdasarkan nama
yargs.command({
  command: 'delate',
  describe: 'menghapus sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.delatecontacts(argv.nama);
  },
})

yargs.parse();
/*
const contacts = require('./contacts');
const main = async() => {
  const nama = await contacts.tulispertanyaan('Asup keun aran : ');
  const email = await contacts.tulispertanyaan('Asupkeun Email jang : ');
  const noHp = await contacts.tulispertanyaan('Asupkeun No hp : ');
  
  contacts.simpanContacts(nama, email, noHp);
};

main(); */