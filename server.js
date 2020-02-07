'use strict';
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(9000, () => { console.log('Listening on localhost:9000'); });