const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About route 🎉');
});

// Export the app as a Vercel handler
module.exports = app;
