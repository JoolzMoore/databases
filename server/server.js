var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var path = require('path')

var server = express()

server.use(bodyParser.urlencoded())

// var data = require('../datastore/db')

var data = {
  'people': [
    {'name': 'Tim', 'description': 'Student'},
    {'name': 'Julia', 'description': 'Mum'},
    {'name': 'Bob', 'description': 'Non-existant'}
  ]
}

server.use(express.static(path.join(__dirname, '../public')));

server.engine('hbs', hbs())
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))


// routes
// server.get('/greetings', function (req, res) {
//   res.sendFile(path.join(__dirname, '../views'))
// })

// server.get('/', function (req, res) {
//   res.render(path.join(__dirname, '../views', 'animal'), data)
// })
