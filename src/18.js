const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Project1234567890 Comprehensive School Project</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
