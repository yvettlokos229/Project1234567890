const express = require('express');
const app = express();
app.use(express.static('./src'));

app.get('/path', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
