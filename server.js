const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());



// Connect to Mongoose
mongoose
        .connect("mongodb://localhost:27017/movie_database", {useNewUrlParser: true })
        .then(() => console.log('MongoDB Connected....'))
        .catch(err => console.log(err));


// Use Routes
app.use('/api/items', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
