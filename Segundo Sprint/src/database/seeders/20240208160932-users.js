'use strict';
const { faker } = require("@faker-js/faker");


module.exports = {
  async up(queryInterface, Sequelize) {

    const users = [];
    Array(250)
      .fill(0)
      .forEach((_, i) => {
        const randomUser = {
          userId: i + 1,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password({ length: 20 }),
          avatar: faker.image.avatar(),
        };
        users.push(randomUser);
      })
    await queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
