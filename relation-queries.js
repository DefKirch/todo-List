const { user, todoItem, todoList } = require("./models");

async function listWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.toJSON());
}

listWithUsers().then((lists) => console.log(lists));
