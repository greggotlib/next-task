const express = require('express')
const path = require('path')
const logger = require('morgan')
const movies = require('./movies.json')
const port = process.env.PORT || 8000

const app = express()
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(movies)
})

app.get('/movies/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(movies.filter((movie) => movie.id === req.params.id))
})

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('Hello')
})

app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
})

module.exports = app
