const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body


//ROUTES//

//create a todo


//get all todos

//get a todo


//update a todo


//delete a todo


//main route
app.get('/', (req, res) => {
  res.send('Hello World! . that is backend of todo-PERN');
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });