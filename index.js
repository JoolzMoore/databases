var development = require('./knexfile').development
var knex = require ('knex')(development)

//Insert data
// knex('users')
//   .insert({
//     'name': 'Wombats',
//     'description': 'Awesome creature'
//   })



//Find all of the selected properties or objects
// knex('users')
//   .select(
//     'name',
//     'description'
//   )
// .then(console.log)



// Find a specific property or object
// knex('users')
//  .where({
//    id: 4
// }).select('name')
//   .then(console.log)



//Updates data where specified
// knex('users')
//   .where('id', '<', 4)
//   .update({
//     name: 'updatedPerson'
//   })
// .then(console.log)



//Delete specified data
// knex('users')
//   .where('id', '>', 10)
//   .del()
//   .then(console.log)
