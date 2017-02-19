var mongoose = require('mongoose');

module.exports = mongoose.model('Ingredient', {
    quantity: {
        type: String
    },
    name: {
        type: String
    }
});