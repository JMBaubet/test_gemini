const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');

// Enable CORS for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy!');
});

app.get('/parameters', (req, res) => {
  const parametersPath = path.join(__dirname, '..', 'parameters.json');
  fs.readFile(parametersPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading parameters.json:', err);
      return res.status(500).send('Error reading parameters file.');
    }
    try {
      const parameters = JSON.parse(data);
      res.json(parameters);
    } catch (parseErr) {
      console.error('Error parsing parameters.json:', parseErr);
      res.status(500).send('Error parsing parameters file.');
    }
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
