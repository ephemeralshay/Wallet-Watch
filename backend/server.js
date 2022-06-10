const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// initialize app
const app = express();

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/v1/transactions', require('./routes/transactionRouter'));

// for dev env only
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Serve assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    )
}
else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));