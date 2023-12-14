import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';

//const db = require("./backend/db");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);

reportWebVitals();
//const express = require('express');
//const app = express();
const PORT = process.env.PORT || 3000;
//const todoRoutes = require('./routes/todos');

//app.use(express.json()); // Parse JSON requests

//app.use('./routes/todos', todoRoutes); // Use the todos routes

//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
//});
