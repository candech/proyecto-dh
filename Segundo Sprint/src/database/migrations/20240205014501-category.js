'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('category', { 
      idCategory:{
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      inSale:{
      type: DataTypes.VARCHAR(10),
      },
      visited:{
        type: DataTypes.VARCHAR(10),
      },
      vegan:{
        type: DataTypes.VARCHAR(10),
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('category');
    
  }
};
