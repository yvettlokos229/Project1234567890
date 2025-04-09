const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('<h1>Project 1234567890 - Comprehensive School Project</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
