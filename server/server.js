var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var path = require('path')
var development = require('../knexfile').development
var knex = require ('knex')(development)

var server = express()

module.exports = server

server.use(bodyParser.urlencoded())

// var data = require('../datastore/db')


// .then(console.log)
// .catch(console.error)

server.use(express.static(path.join(__dirname, '../public')));

server.engine('hbs', hbs())
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, '../views'))





// ROUTES

server.get('/', function (req, res) {
  knex('users')
    .select()
    .then(function (data) {
      res.render('index', {users: data})
    })
    .catch(console.error)
})

// server.get('/greetings', function (req, res) {
//   res.sendFile(path.join(__dirname, '../views'))
// })
