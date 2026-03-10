import express from "express";
import bodyParser from "body-parser";
const app = express();

const PORT = 8080;

// middleware to parse JSON bodies (for POST and PUT requests)
// app.use(express.json());
// or
app.use(bodyParser.json());

// define a route for the root path
app.all("/", (req, res) => {
  //   console.log(`Request > `, req);
  //   console.log(`Response >`, res);
  res.send(`I'm up!`);
});

const todoList = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Express",
    completed: false,
  },
];

// define a route for getting the todo list (Read operation: GET)
app.get("/todos", (req, res) => {
  res.json(todoList);
});

// define a route for creating a new todo (Create operation: POST)
app.post("/todos", (req, res) => {
  const newTodo = req.body; // get the new todo from the request body
  newTodo.id = todoList.length + 1; // assign a new id to the todo
  todoList.push(newTodo); // add the new todo to the list
  res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo,
  }); // send a response with the created todo
});

// define a route for updating a todo (Update operation: PUT)
app.put("/todos/:id", (req, res) => {
  // const todoId = parseInt(req.params.id); // get the id from the route parameters
  const todoUpdatedData = req.body; // get the updated todo data from the request body
  const todoId = parseInt(req.params.id); // get the id from the route parameters
  const todoIndex = todoList.findIndex((td) => td.id === todoId); // find the index of the todo to update

  if (todoIndex !== -1) {
    // if the todo exists, update it
    todoList[todoIndex] = {
      id: todoId, // keep the same id
      ...todoUpdatedData, // update the rest of the fields
    };
  } else {
    // if the todo doesn't exist, send a 404 response
    res.status(404).json({ message: "Todo not found" });
    return; // exit the function to avoid sending another response
  }

  res.status(200).json({
    message: "Todo updated successfully",
    todo: todoList[todoIndex],
  });
});

// define a route for deleting a todo (Delete operation: DELETE)
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id); // get the id from the route parameters
  const todoIndex = todoList.findIndex((td) => td.id === todoId); // find the index of the todo to delete
  if (todoIndex !== -1) {
    // if the todo exists, delete it
    todoList.splice(todoIndex, 1); // remove the todo from the list
    res.status(200).json({ message: "Todo deleted successfully" }); // send a response indicating success
  } else {
    // if the todo doesn't exist, send a 404 response
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
