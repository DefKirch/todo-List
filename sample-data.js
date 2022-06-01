const TodoItem = require("./models").todoItem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return [todo1, todo2, todo3].map((item) => item.toJSON());
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then((todos) => console.log(todos));
