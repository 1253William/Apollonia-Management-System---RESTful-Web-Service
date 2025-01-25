const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.route');
const departmentRoutes = require('./routes/department.route');

//DB Connection
connectDb();

//Middlewares
app.use(express.json()); 
app.use(cors())
app.use(morgan('dev'));  

//Routes middleware
app.use('/api', authRoutes, departmentRoutes);

//Test route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Running...'
    });
})

//Application Port 
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})