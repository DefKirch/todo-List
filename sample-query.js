const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}
// Select all rows where firstName === 'Dave', but only return the first one.
// Resolves with an object or undefined (if no matching rows exist)
async function getUserByName() {
  try {
    const specificUser = await User.findOne({
      where: { name: "Thijmen Kirch" },
    });
    return specificUser;
  } catch (e) {
    console.log(e.message);
  }
}

// Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
async function getUserByPk(primaryKey) {
  try {
    const userByPk = await User.findByPk(primaryKey);
    return userByPk;
  } catch (e) {
    console.log(e.message);
  }
}

// A query using a numeric operator
// async function getUserOlderThan(age) {
//     const tallUsers = await User.findAll({
//         WHERE  >= 175
//         where: {
//             height: {
//             [Op.gte]: 175, // gte stands for 'greater than or equal'
//             },
//         },
//     });
// }

// getAllUsers().then((users) => console.log(users));
// getUserByName().then((user) => console.log(user));
getUserByPk(3).then((user) => console.log(user));
