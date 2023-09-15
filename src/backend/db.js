// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sray1985:Aa036572501@zimer1.wod9dje.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// // Create Models
// const todoSchema = new mongoose.Schema({
//   title: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model('Todo', todoSchema);

// module.exports = Todo;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sray1985:Aa036572501!@zimer1.wod9dje.mongodb.net/',
 {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("mongo connected")
  // we're connected!
});

module.exports = db;