'use strict';
const { faker } = require("@faker-js/faker");


module.exports = {
  async up(queryInterface, Sequelize) {

    const users = [
      {id: 1,
      firstName: 'cande',
      lastName: 'ch',
      email: 'cande@admin.com',
      password: 'pizzarock',
      typeId: 1,
      avatar: 'https://www.nicepng.com/png/detail/348-3488420_this-is-pizza-steve-of-of-cartoon-network.png',
    },
      {id: 2,
      firstName: 'jennifer',
      lastName: 'villagra',
      email: 'jennifer@admin.com',
      password: 'pizzarock',
      typeId: 1,
      avatar: faker.image.avatar(),
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