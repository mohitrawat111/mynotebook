const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // e11000-duplicate-key-error-index-in-mongodb-mongoose- so remove it to avoid this error and drop test db and again it will recreate when u hit the api from thunderbolt
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const User = mongoose.model('user', UserSchema);

module.exports = User