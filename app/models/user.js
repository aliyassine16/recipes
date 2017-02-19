var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
});