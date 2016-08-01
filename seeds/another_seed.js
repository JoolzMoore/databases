
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table2').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table2').insert({id: 1, age: '22', job: 'unemployed'}),
        knex('table2').insert({id: 2, age: '33', job: 'unemployed'}),
        knex('table2').insert({id: 3, age: '44', job: 'unemployed'})
      ]);
    });
};
