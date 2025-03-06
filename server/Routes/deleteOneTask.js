const taskModel = require('../DB/newTaskSchema');

module.exports = async function deleteOneTask(req, res) {
    const id = req.query.id
    //console.log(id);
    
    try {
        // Felhasználó lekérdezése és törlése az adatbázisból az id alapján
        const task = await taskModel.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task nem található' });
        }
        console.log("Törlés sikeres:", task);
        res.status(200).json({ message: 'Task sikeresen törölve', task }); // Törölt felhasználó elküldése a kliensnek
    } catch (err) {
        console.error('Törlési hiba:', err);
        res.status(500).json({ error: 'Nem sikerült törölni a taskot' });
    }
}