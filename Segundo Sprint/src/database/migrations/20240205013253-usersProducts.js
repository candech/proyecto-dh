'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usersProducts', { 
      idUsersProducts: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idUsers: {
        type: DataTypes.INTEGER,
        foreingKey: true,
      },
      IdProducts: {
        type: DataTypes.INTEGER,
        foreingKey: true,
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('usersProducts');
    
  }
};
