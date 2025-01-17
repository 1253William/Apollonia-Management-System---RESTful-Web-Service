const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        // Establish the connection
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Connection: MongoDB connected successfully`);

        // Add an event listener for connection issues
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err.message);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDb;