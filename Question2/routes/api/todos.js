const express = require("express");
const Router = express.Router();
const Todos = require("../../models/todos");
Router.get("/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);
  res.send(todos);
});
Router.delete("/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);
  await todos.delete();
  res.send(todos);
});
Router.put("/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);
  todos.title = req.body.title;
  todos.description = req.body.description;
  await todos.save();
  res.send(todos);
});
Router.get("/", async (req, res) => {
  let todos = await Todos.find();
  res.send(todos);
});
Router.post("/", async (req, res) => {
  let todos = new Todos(req.body);
  await todos.save();
  res.send(todos);
});

module.exports = Router;
