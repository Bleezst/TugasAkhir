'use strict';
let md5 = require('md5')
const now = new Date()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        name:"rizal",
        email:"rzzllkna@gmail.com",
        password:md5("12365"),
        createdAt: now,
        updatedAt: now
      },
      {
      name:"dzaky",
      email:"dzaky@gmail.com",
      password:md5("123456"),
      createdAt: now,
      updatedAt: now
      },
      {
      name:"devita",
      email:"vita@gmail.com",
      password:md5("123456"),
      createdAt: now,
      updatedAt: now
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};