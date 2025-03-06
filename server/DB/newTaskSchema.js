const mongoose = require('mongoose');

const newTaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Feladat megadása kötelező!'],
    },
});

const taskModel = mongoose.model("Task", newTaskSchema);
module.exports = taskModel