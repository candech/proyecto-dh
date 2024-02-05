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
      },
      firstName: {
        type: DataTypes.STRING,

      },
      lastName: {
        type: DataTypes.STRING,


      },
      email: {
        type: DataTypes.VARCHAR(),

      },
      password: {
        type: DataTypes.VARCHAR(),
      },
      idType: {
        type: DataTypes.STRING,
        foreingKey: true,
      },
      avatar: {
        type: DataTypes.IMAGE('.jpg','.png','jpeg','.gif'),
      },
    });

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.dropTable('users');
    
  }
};
