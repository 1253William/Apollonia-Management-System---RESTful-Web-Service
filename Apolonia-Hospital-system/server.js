const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

//DB Connection
connectDb();

//Middlewares
app.use(express.json()); 
app.use(bodyParser.json())
app.use(cors())

//Routes
app.get('/', (req, res) => {
    res.send('Server Running...');
})

//Application Port 
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})