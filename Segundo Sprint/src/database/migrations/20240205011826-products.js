'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.createTable('products', { 
    idProducts: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.VARCHAR(50),
    },
    price: {
      type: DataTypes.DECIMAL(),
    },
    idCategory: {
      type: DataTypes.VARCHAR(),
      foreingKey: true,
    },
    description: {
      type: DataTypes.VARCHAR(),
    },
    image: {
      type: DataTypes.IMAGE('.jpg','.png','jpeg'),
    },
   });
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('products');
    
  }
};
