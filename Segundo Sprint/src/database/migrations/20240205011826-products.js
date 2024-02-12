'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.createTable('products', { 
    productsId: {
      type: DataTypes.INTEGER(), 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER, 
      references: {
        model: {
          tableName: 'categorys',
          key: 'id'
        },
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    price: {
      type: DataTypes.DECIMAL,
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
