var development = require('./knexfile').development
var knex = require ('knex')(development)

knex.insert({
  name: 'Bob',
  description: 'fast'
})
.into('users')
.then(getNames)
.then(showNames)
.catch(displayError)


function getNames(){
  return knex('users').select('users.name')
}

function showNames (names){
  console.log(names)
}

function displayError (err){
  console.error(err)
}

// getDataFromServer()
// .then(doSomethingWithData)
// .catch(handleError)
//
// function doSomething (data){
// }
// function handleError(err){
// }


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


// Joining two tables
// knex.select('*').from('users').leftJoin('table2', 'users.id', 'users.description')
// .then(console.log)
