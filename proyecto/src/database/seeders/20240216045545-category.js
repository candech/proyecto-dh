'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('category', [{
      id:1,
      code: 'inSale',
      label: 'En descuento',
    }, {
      id:2,
      code: 'visited',
      label: 'Últimos agregados'
    }, {
      id:3,
      code: 'vegan',
      label: 'Veganas'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('category', null, {});

  }
};
