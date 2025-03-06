const taskModel = require('../DB/newTaskSchema');
const sanitizeData = require('../Validation/sanitizeData');

module.exports = async function createTask(req, res) {  
    const taskObject = req.body;
    console.log("Data from frontend:", taskObject);

    
    // Check input data
    if (!taskObject || !taskObject.task) {
        return res.status(400).json({ message: "Task field is required" });
    }

    try {
        sanitizeData(taskObject.task);
    } catch (err) {
        return res.status(400).json({ message: "Data sanitization failed" });
    }

    const newTask = new taskModel(taskObject);
    try {
        await newTask.save();
        res.status(201).json({
            message: "Task successfully added",
            data: newTask
        });
        console.log("Data from DB:", newTask, "user added successfully");   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}