
exports.up = function(knex, Promise) {
  return knex.schema.createTable('table2', function (table) {
    table.increments('id').primary()
    table.string('age')
    table.string('job')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('table2')
};
