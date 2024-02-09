/*'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      userId: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      typeId: {
        type: DataTypes.INTEGER, 
        references: {
          model: {
            tableName: 'types',
          },
          key: 'id'
        },
        allowNull: false,
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
*/