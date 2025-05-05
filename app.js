const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About route 🎉');
});

// Export serverless handler
module.exports.handler = serverless(app);
