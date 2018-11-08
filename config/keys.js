
const mongoose = require('mongoose');
mongoose.connect('mongodb://zam:zamin123@ds155213.mlab.com:55213/movie_database_zam');
const db = mongoose.connection;
module.exports(db);
