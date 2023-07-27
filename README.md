
# TODOLIST-APP

A simple To-Do List API built using Node.js, Express, Sequelize, and MySQL for managing tasks.



## Features

- Get all tasks from the database.
- Add a new task to the database.
- Update a task's completion status.
- Delete a task from the database.


## Installation

1. Clone the Repository:

```bash
  git clone https://github.com/Su25100/Todolist_app_crud.git
  cd Todolist_app_crud
```
2.Install dependencies:
  ```bash
  npm install express mysql2  sequelize nodemon
  ```
3. Set up the database:
  
  a. Make sure you have MySQL Workbench installed on your system.
 
  b. Create a new MySQL database with the name todolist_app.
  
  c. Update the DB_USER, DB_PASSWORD, and DB_HOST fields in the    env file with your MySQL credentials.

3. Run the server:
   ```bash
      npm start
  
   
## API EndPoints

 1.GET /tasks: Retrieve all tasks from the database.

 2.POST /tasks: Add a new task to the database.

 3.PATCH /tasks/:id: Update a task's completion status.

 4.DELETE /tasks/:id: Delete a task from the database.

 


## Usage/Examples
You can use tools like Postman to test the API endpoints.

a. Use GET /tasks to retrieve all tasks.

b. Use POST /tasks with a JSON body like {"task_name": "Task 1", "completed": false} to add a new task.

c. Use PATCH /tasks/:id with a JSON body like {"completed": true} to update a task's completion status by ID.

d. Use DELETE /tasks/:id to delete a task by ID.




## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.
