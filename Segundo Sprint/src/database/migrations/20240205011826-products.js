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
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      
    },
    idCategory: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false,
      
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
   });
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('products');
    
  }
};
