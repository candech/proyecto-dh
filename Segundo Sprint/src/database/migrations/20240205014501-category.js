'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('category', { 
      idCategory:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      inSale:{
      type: DataTypes.STRING,
      allowNull: false,
      
      },
      visited:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      vegan:{
        type: DataTypes.STRING,
        allowNull: false,
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('category');
    
  }
};
