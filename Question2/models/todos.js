const mongoose = require("mongoose");
const todosSchema = mongoose.Schema({
  title: String,
  description: String,
});
const Todos = mongoose.model("Todos", todosSchema);
module.exports = Todos;
