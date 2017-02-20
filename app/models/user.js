var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    stared:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Recipe'
    }]
});