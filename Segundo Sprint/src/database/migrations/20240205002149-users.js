'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      idUsers: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      lastName: {
        type: DataTypes.STRING, 
        allowNull: false,

      },
      email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,

      },
      password: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      idType: {
        type: DataTypes.INTEGER, 
        foreignKey: true,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.dropTable('users');
    
  }
};
