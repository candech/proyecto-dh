'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('type', [{
      code: 'admin',
      label: 'Administrador'
      },{
        code: 'customer',
        label: 'Consumidor'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('type', null, {});
    
  }
};
