const express = require('express');
const path = require('path');

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route 
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

const router = express.Router();

