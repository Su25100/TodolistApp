const express = require("express");
const app = express();

const port = 8000;

const mysql = require('mysql2');

const { sequelize, Tasks } = require("./models/db"); // Import sequelize from the db module

const taskController = require("./controllers/taskController");


// Middleware
app.use(express.json());


// Use the task controller for "GET /tasks" route
app.get("/tasks", taskController.getAllTasks);

// Step 1: Add the "POST /tasks" route
app.post("/tasks", taskController.createTask);

app.patch("/tasks/:id", taskController.updateTaskCompletionStatus);

// Route to delete all tasks
app.delete('/tasks/:id', taskController.deleteTaskById);

app.listen(port, () => console.log(`server connected at port:${port}`));