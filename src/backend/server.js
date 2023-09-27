const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db/mongoConect");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Mock user data (replace this with an actual database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Route to handle login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});