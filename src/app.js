const path = require('path');
const express = require('express')
const app = express()

app.use(express.static(__dirname))
app.use(express.static('../node_modules'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000)