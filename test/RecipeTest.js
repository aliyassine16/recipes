var supertest = require('supertest');
var should = require('should');


// DB Conf
var mongoose = require('mongoose');
var database = require('./../config/database');
mongoose.connect(database.localUrl);


var User = require('./../app/models/user');
var Recipe = require('./../app/models/recipe');
var Ingredient = require('./../app/models/ingredient');


var server = supertest.agent('http://localhost:3000');


describe("test of the list recipe function ", function () {
    it("should reply with the json empty list of recipes", function (done) {

        Recipe.collection.remove();

        server
            .get("/api/listRecipes")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {

                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.length.should.equal(0);
                done();

            });
    });
});


// import recipe from json file and get a list

describe("import recipe from json file and get a list of recipe", function () {
    it("should reply with the json one user object", function (done) {

        Ingredient.collection.remove();
        Recipe.collection.remove();


        var filePath = __dirname + '/../public/data/recipes.json';
        console.log(filePath);
        require('fs').readFile(filePath, 'utf8', function (err, data) {
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


        server
            .get("/api/populateData")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                //res.body.data.length.should.equal(3);
                done();

            });
    });
});


// list of recipes
describe("test of the list recipe function ", function () {
    it("should reply with the json list of recipes", function (done) {


        server
            .get("/api/listRecipes")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {

                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.length.should.greaterThan(0);
                done();

            });
    });
});


// ingredients by recipe id
describe("test of the list of ingredient function ", function () {
    it("should reply with the json list of recipe plus ingredients", function (done) {

        var recipeId = "68ae06dc146a6928beb334e0";

        server
            .get("/api/listRecipeDetail/" + recipeId)
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {

                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(false);
                res.body.err.should.equal('recipe Does not Exist');
                done();

            });
    });
});