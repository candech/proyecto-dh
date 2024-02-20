'use strict';
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {

    const products = [];
    Array(5)
      .fill(0)
      .forEach((_, i) => {
        const idRandom = Math.floor(Math.random() * 2) + 1;
        const randomProducto = {
          id: i + 1,
          name: faker.commerce.productName(),
          price: faker.finance.amount({ min: 2000, max: 70000, dec: 0 }), 
          categoryId: idRandom,
          description: faker.commerce.productDescription(),
          image: faker.image.urlLoremFlickr({ category: 'food' })

        };
        products.push(randomProducto);
      })
    await queryInterface.bulkInsert("products", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
