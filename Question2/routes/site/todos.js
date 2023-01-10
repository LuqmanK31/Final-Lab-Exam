const express = require("express");
const Router = express.Router();
const Todos = require("../../models/todos");

Router.get("/add", async (req, res) => {
  res.render("todos/add");
});
Router.post("/add", async (req, res) => {
  let todos = new Todos(req.body);
  await todos.save();
  res.redirect("/todos");
});

Router.get("/delete/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);
  await todos.delete();
  res.redirect("/todos");
});

Router.get("/edit/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);

  res.render("todos/edit", { todos });
});

Router.post("/edit/:id", async (req, res) => {
  let todos = await Todos.findById(req.params.id);
  todos.title = req.body.title;
  todos.description = req.body.description;
  await todos.save();
  res.redirect("/todos");
});

Router.get("/", async (req, res) => {
  let todos = await Todos.find();
  res.render("todos/list", { todos, pageTitle: "Todos Page Title" });
});

module.exports = Router;
