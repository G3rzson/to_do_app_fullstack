const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGO_URL;

module.exports = async function connectToDB() {
    try {
        await mongoose.connect(URL);
        console.log('Kapcsolódás sikeres');
    } catch (err) {
        console.error('Kapcsolódási hiba:', err);
    }
}
