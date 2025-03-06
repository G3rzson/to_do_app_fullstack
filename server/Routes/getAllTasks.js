const taskModel = require('../DB/newTaskSchema');

module.exports = async function getAllTask(req, res) {
    try {
        // Fetch tasks from the database
        const tasks = await taskModel.find();
        //console.log("Tasks fetched successfully");
        res.status(200).json(tasks); // Send tasks to the client
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
}