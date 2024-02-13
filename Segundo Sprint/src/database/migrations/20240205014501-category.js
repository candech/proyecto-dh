'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('category', { 
      id:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
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
