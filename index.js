const express = require("express");
const req = require("express/lib/request");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;

// Body parser middelware -> runs before all the endpoints
app.use(express.json());

// Test endpoint
app.post("/echo", (req, res) => {
  res.json(req.body);
});

// Create a new user account
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address!");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// Get user by pk
app.get("/users/:userId", async (req, res, next) => {
  try {
    const id = req.params.userId;
    const userByPk = await User.findByPk(id);
    if (!userByPk) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(userByPk);
    }
  } catch (e) {
    next(e);
  }
});

// Update user data
app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// Get all todoLists
app.get("/todoLists", async (req, res, next) => {
  try {
    const allTodoLists = await TodoList.findAll({ raw: true });
    res.json(allTodoLists);
  } catch (e) {
    next(e);
  }
});

// Create a todoList
app.post("/todolists", async (req, res, next) => {
  try {
    const userId = parseInt(req.body.userId);
    if (!userId) {
      res.status(400).send("Must include userId");
    } else {
      const todoList = await TodoList.create(req.body);
      res.json(todoList);
    }
  } catch (e) {
    next(e);
  }
});

// Update a todoList
app.put("/todoLists/:todoListId", async (req, res, next) => {
  try {
    const todoListId = req.params.todoListId;
    const todoListToUpdate = await TodoList.findByPk(todoListId);
    if (!todoListId) {
      res.status(404).send("Todo List not found");
    } else {
      const updatedTodoList = await todoListToUpdate.update(req.body);
      res.json(updatedTodoList);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
