const Mongoose = require('mongoose');

exports.UsersModel = Mongoose.model(
    'users',
    {
        firstname: String,
        lastname: String,
        email: String,
    }
);
