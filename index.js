const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', (_req, res) => {
  fs.readFile('./index.html', 'utf8', (err, text) => {
      res.send(text);
  })
})

app.listen(3000, () => {
  console.log('App running on port 3000')
})