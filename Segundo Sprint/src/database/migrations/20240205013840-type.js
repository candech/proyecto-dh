'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('type', {
      id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      
      customer: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      admin: {
        type: DataTypes.STRING, 
        allowNull: false,
       
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('type');

  }
}
