'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id: {
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
      typeId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
        model: {
          tableName: "type",
        },
        key: "id",
      }, 
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
