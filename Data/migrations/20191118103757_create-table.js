//VIN, make, model, and mileage.
exports.up = function(knex) {
  return knex.schema
  .createTable('cars',(cars) => {
    cars.increments('id');
    cars.string('VIN').notNullable().unique();
    cars.string('make').notNullable();
    cars.string('model').notNullable();
    cars.integer('mileage')
  })
};
 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
