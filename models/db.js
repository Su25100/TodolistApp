const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../connection');

const Tasks = sequelize.define('Tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    task_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },


});

// Create the table in the database
Tasks.sync()
    .then(() => {
        console.log('Task table created successfully');
    })
    .catch((err) => {
        console.error('Error creating Task table:', err);
    });

module.exports = {
    Tasks,
    sequelize
};