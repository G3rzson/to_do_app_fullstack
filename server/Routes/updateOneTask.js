const taskModel = require('../DB/newTaskSchema');

module.exports = async function updateOneTask(req, res) {
    const id = req.query.id
    const task = req.body.task
    
    try {
        // Felhasználó lekérdezése és frissítése az adatbázisból az id alapján
        const updatedTask = await taskModel.findByIdAndUpdate(
            { _id: id },
            { task: task},
            { new: true } // Ezzel az opcióval a frissített dokumentumot kapjuk vissza
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task nem található' });
        }
        console.log("Frissítés sikeres:", updatedTask);
        res.status(200).json(updatedTask); // Frissített felhasználó elküldése a kliensnek
    } catch (err) {
        console.error('Frissítési hiba:', err);
        res.status(500).json({ error: 'Nem sikerült frissíteni a taskot' });
    }
}