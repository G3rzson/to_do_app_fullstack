const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

// middleware for json and cors 
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectToDB = require('./DB/ConnectToDB');
connectToDB();

// Routes imports
const createTask = require("./Routes/createTask");
const getAllTasks = require("./Routes/getAllTasks");
const deleteOneTask = require("./Routes/deleteOneTask");
const updateOneTask = require("./Routes/updateOneTask");

// Routes
app.post('/addTask', createTask);
app.get('/getAllTasks', getAllTasks);
app.delete('/deleteOneTask', deleteOneTask);
app.put('/updateOneTask', updateOneTask);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
