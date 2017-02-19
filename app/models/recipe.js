var mongoose = require('mongoose');

module.exports = mongoose.model('Recipe', {
    recipe: {
        type: String
    },
    cooking_time:{
        type: String
    }
    ,
    image:{
        type: String
    },
    ingredients:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ]
});


