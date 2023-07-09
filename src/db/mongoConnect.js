const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sray_85:Aa036572501!@cluster0.p99i6ii.mongodb.net/');

// getting-started.js
//const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
       // console.log{"mongo connected"}
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.export = db;