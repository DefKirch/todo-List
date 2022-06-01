const { user, todoItem, todoList } = require("./models");

async function listWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });
  return lists.map((list) => list.toJSON());
}

// Get all users including their lists
const getUsers = async () => {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
};

// Get a user and his lists by user pk
const getUserWithList = async (primaryKey) => {
  const oneUser = await user.findByPk(primaryKey, {
    include: [todoList],
  });
  return oneUser.toJSON();
};

// listWithUsers().then((lists) => console.log(lists));
// getUsers().then((users) => console.log(users));
getUserWithList(2).then((user) => console.log(user));
