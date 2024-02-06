'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usersProducts', { 
      idUsersProducts: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      idUsers: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        
      },
      IdProducts: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('usersProducts');
    
  }
};
