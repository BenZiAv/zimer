const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todoRoutes = require('./routes/todos');

app.use(express.json()); // Parse JSON requests

app.use('/todos', todoRoutes); // Use the todos routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
