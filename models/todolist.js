"use strict";
const { Model } = require("sequelize");
// const todoitem = require("./todoitem");

module.exports = (sequelize, DataTypes) => {
  class todoList extends Model {
    static associate(models) {
      todoList.belongsTo(models.user, { foreignKey: "userId" });
      todoList.hasMany(models.todoItem, { foreignKey: "todoItemId" });
    }
  }

  todoList.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todoList",
    }
  );
  return todoList;
};
