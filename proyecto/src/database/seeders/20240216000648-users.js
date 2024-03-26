'use strict';
const { faker } = require("@faker-js/faker");


module.exports = {
  async up(queryInterface, Sequelize) {

    const users = [
      {id: 1,
      firstName: 'cande',
      lastName: 'ch',
      email: 'cande@admin.com',
      password: '$2a$10$.Q4KCcsQU8XhbbQBpGi9ru4ljAiZv5bEmSemwKs5rTL17oBiDA3sK',
      typeId: 1,
      avatar: 'default.jpeg',
    },
      {id: 2,
      firstName: 'jennifer',
      lastName: 'villagra',
      email: 'jennifer@admin.com',
      password: '$2a$10$.Q4KCcsQU8XhbbQBpGi9ru4ljAiZv5bEmSemwKs5rTL17oBiDA3sK',
      typeId: 1,
      avatar: 'default.jpeg',
    },
    ]
       Array(20)
      .fill(0)
      .forEach((_, i) => {
        
        const randomUser = {
          id: i + 3,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password({ length: 20 }),
          typeId: 2,
          avatar: faker.image.avatar(),
        };
        users.push(randomUser);
      }) 
    
      
      
    await queryInterface.bulkInsert('users', users,{});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};