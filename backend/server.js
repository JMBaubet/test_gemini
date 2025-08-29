const express = require('express');
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
