'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('category', [{
      code: 'inSale',
      label: 'En descuento'
    }, {
      code: 'visited',
      label: 'ultimos agregados'
    }, {
      code: 'vegan',
      label: 'Veganas'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('category', null, {});

  }
};
