"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Home",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Extra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
