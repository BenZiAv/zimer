const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sray_85:Aa036572501!@cluster0.p99i6ii.mongodb.net/');

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connected error:'));
db.once('open', () => {
  console.log("mongo conncted")
});
module.export = db;