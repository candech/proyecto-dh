'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      idUsers: 1,
      firstName: 'John ',
      lastName: 'Doe',
      email: 'juand@gmail.com',
      
    },{
      idUsers: 2,
      firstName: 'Juana ',
      lastName: 'arco',
      email: 'juanita@gmail.com',
      

    },{
      idUsers: 3,
      firstName: 'maria ',
      lastName: 'perez',
      email: 'maria@gmail.com',
      

    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
