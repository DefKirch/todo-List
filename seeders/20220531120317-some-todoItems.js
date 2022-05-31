"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Vacuum",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Homework",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Grocery shopping",
          deadline: "end of the week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Do the laundry",
          deadline: "friday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
