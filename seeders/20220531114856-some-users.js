"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Thijmen Kirch",
          email: "thijmen@kirch.nl",
          phone: "0640200784",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philip Kirch",
          email: "Philip@kirch.nl",
          phone: "0640520314",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meike Kirch",
          email: "meike@kirch.nl",
          phone: "0643127784",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Martin Kirch",
          email: "martin@kirch.nl",
          phone: "0652483522",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
