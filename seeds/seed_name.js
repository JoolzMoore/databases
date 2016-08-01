
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'person1', description: 'asiubdasd'}),
        knex('users').insert({id: 2, name: 'person2', description: 'asiubdasd'}),
        knex('users').insert({id: 3, name: 'person3', description: 'asiubdasd'}),
        knex('users').insert({id: 4, name: 'person4', description: 'asiubdasd'}),
        knex('users').insert({id: 5, name: 'person5', description: 'asiubdasd'}),
        knex('users').insert({id: 6, name: 'person6', description: 'asiubdasd'}),
        knex('users').insert({id: 7, name: 'person7', description: 'asiubdasd'}),
        knex('users').insert({id: 8, name: 'person8', description: 'asiubdasd'}),
        knex('users').insert({id: 9, name: 'person9', description: 'asiubdasd'}),
        knex('users').insert({id: 10, name: 'person10', description: 'asiubdasd'}),
        knex('users').insert({id: 11, name: 'person11', description: 'asiubdasd'}),
        knex('users').insert({id: 12, name: 'person12', description: 'asiubdasd'}),
      ]);
    });
};
