exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([{
          VIN: 'val1',
          make: "some make 1",
          model: "some model 1",
          mileage: 112312
        },
        {
          VIN: 'val2',
          make: "some make 2",
          model: "some model 2",
          mileage: 112312321
        },
        {
          VIN: 'val7',
          make: "some make 1",
          model: "some model 1",
          mileage: 112321321
        },
        {
          VIN: 'val3',
          make: "some make 3",
          model: "some model 3",
          mileage: 1121
        },
        {
          VIN: 'val4',
          make: "some make 4",
          model: "some model 4",
        },
        {
          VIN: 'val5',
          make: "some make 5",
          model: "some model 5",
          mileage: 1312
        },
        {
          VIN: 'val6',
          make: "some make 6",
          model: "some model 6",
        }
      ]);
    });
};