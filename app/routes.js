var User = require('./models/user');
var Recipe = require('./models/recipe');
var Ingredient = require('./models/ingredient');

function getUsers(res) {
    User.find(function (err, data) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(data); // return all users in JSON format
    });
};


function polulateData(res) {


    var filePath = __dirname + '/../public/data/recipes.json';

    console.log(filePath);

    require('fs').readFile(filePath, 'utf8', function (err, data) {
        if (err) {

        }
        // error handling

        var recipes = JSON.parse(data);
        //console.log(recipes.recipes);
        recipes = recipes.recipes;


        // loop on the recipes
        recipes.forEach(recipe => {
            //console.log(recipe);

            var recipe1 = new Recipe({
                recipe: recipe.name,
                cooking_time: recipe.cooking_time,
                image: recipe.image

            });


            recipe.ingredients.forEach(function (ingredient) {

                var ingredient1 = new Ingredient(ingredient);
                ingredient1.save();
                recipe1.ingredients.push(ingredient1._id);

            });

            recipe1.save();
        });


    });


    Recipe.find({})
        .populate('ingredients')
        .exec(function (error, recipes) {
            console.log(JSON.stringify(recipes, null, "\t"));
            res.json(recipes);
        });

}

function getRecipes(res) {


    Recipe.find({})
        .populate('ingredients')
        .exec(function (err, recipes) {
            if (err) {
                res.send(err);
            }
            console.log(JSON.stringify(recipes, null, "\t"));
            res.json(recipes);
        });


};

function getRecipeDetails(res,id) {


    Recipe.find({_id:id})
        .populate('ingredients')
        .exec(function (err, recipeDetails) {
            if (err) {
                res.send(err);
            }
            console.log(JSON.stringify(recipeDetails, null, "\t"));
            res.json(recipeDetails);
        });


};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/listUsers', function (req, res) {
        // use mongoose to get all users in the database
        //getUsers(res);
        getUsers(res);
    });

    app.get('/api/listRecipes', function (req, res) {
        // use mongoose to get all recipes in the database
        //getUsers(res);
        getRecipes(res);
    });

    app.get('/api/listRecipeDetail/:id', function (req, res) {
        // use mongoose to get all recipes in the database
        //getUsers(res);
        getRecipeDetails(res,req.params.id);
    });




    app.get('/api/populateData', function (req, res) {
        //getUsers(res);
        polulateData(res);

    });

    // create a user
    app.post('/api/createUser', function (req, res) {

        // create a user, information comes from AJAX request from Angular
        User.create({
            fullName: req.body.fullName,
            email: req.body.email
        }, function (err, data) {
            if (err)
                res.send({success:false,err:err});

            // send the user object
            console.log(data);
            if(data==null || data==undefined){
                res.send({success:false,err:"User Does not Exist"});
            }
            else{
                res.send({success:true,data:data});
            }
        });

    });


    app.post('/api/user/login', function (req, res) {

        // create a user, information comes from AJAX request from Angular
        User.findOne({
            email: req.body.email
        }, function (err, data) {
            if (err)
                res.send({success:false,err:err});

            // send the user object
            console.log(data);
            if(data==null || data==undefined){
                res.send({success:false,err:"User Does not Exist"});
            }
            else{
                res.send({success:true,data:data});
            }


        });

    });



    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
