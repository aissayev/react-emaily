const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

// dynamic PORT binding
const PORT = process.env.PORT;
app.listen(PORT || 5000);