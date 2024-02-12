'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('type', {
      typeId:
      {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER, 
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        allowNull: false,
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
