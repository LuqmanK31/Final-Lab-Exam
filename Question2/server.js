const mongoose = require("mongoose");
const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const Todos = require("./models/todos");
//if you dont have node_modules folder then run below command
// npm install

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
const todosApiRouter = require("./routes/api/todos");
const todosSiteRouter = require("./routes/site/todos");
app.use("/api/todos", todosApiRouter);
app.use("/todos", todosSiteRouter);

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});
app.get("/", (req, res) => {
  res.render("homepage");
});
mongoose
  .connect("mongodb://localhost/sp20-bcs-a")
  .then(() => {
    console.log("connected to mongodb:localhost//sp20-bcs-a");
  })
  .catch(() => {
    console.log("unable to connect");
  });
app.listen(3005);

//execute this file with following command
// node server

//for auto refresh of the code install nodemon globally
//npm install nodemon -g
// then run the file with nodemon
//nodemon server
