const { Tasks } = require("../models/db");

async function getAllTasks(req, res) {
    try {
        const allTasks = await Tasks.findAll();
        res.json(allTasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
}

async function createTask(req, res) {
    try {
        const { task_name, completed } = req.body;

        if (!task_name) {
            return res.status(400).json({ error: 'task_name is required in the request body' });
        }

        const newTask = await Tasks.create({ task_name, completed });

        res.status(201).json(newTask); // Pass the newly created task as JSON in the response
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'An error occurred while creating the task' });
    }
}

async function updateTaskCompletionStatus(req, res) {
    try {
        const taskId = req.params.id;
        const { completed } = req.body;

        if (typeof completed !== 'boolean') {
            return res.status(400).json({ error: 'completed field must be a boolean value' });
        }

        // Find the task by its ID
        const taskToUpdate = await Tasks.findByPk(taskId);

        if (!taskToUpdate) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Update the task's completion status
        taskToUpdate.completed = completed;
        await taskToUpdate.save();

        // Return the updated task as JSON
        res.json(taskToUpdate);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'An error occurred while updating the task' });
    }
}

async function deleteTaskById(req, res) {
    try {
        const taskId = req.params.id;

        // Find the task by its ID
        const taskToDelete = await Tasks.findByPk(taskId);

        if (!taskToDelete) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Delete the task
        await taskToDelete.destroy();

        res.json({ message: 'Task has been deleted' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTaskCompletionStatus,
    deleteTaskById,
};