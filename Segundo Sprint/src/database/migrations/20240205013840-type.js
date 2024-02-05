'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('type', { 
    idType:
    {
      type: DataTypes.INTEGER,
        primaryKey: true,
    },
    customer:{
      type: DataTypes.VARCHAR(20),
    },
    admin:{
      type: DataTypes.VARCHAR(20),
    },
     });
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('type');
    
  }
};
