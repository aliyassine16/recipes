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


describe("test of the list user function ", function () {
    it("should reply with the json empty list of users", function (done) {

        User.collection.remove();

        server
            .get("/api/listUsers")
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


// collection user with one record
describe("test of the list user function ", function () {
    it("should reply with the json one user object", function (done) {
        User.collection.remove();
        User.create({
            fullName: 'Ali Yassine',
            email: 'aliyassine18@gmail.com'
        });
        server
            .get("/api/listUsers")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.length.should.equal(1);
                done();

            });
    });
});


// creating a user
describe("test of the user creation ", function () {
    it("should create a user and return the object", function (done) {
        User.collection.remove();

        server
            .post("/api/createUser")
            .send({
                fullName: 'Ali Yassine',
                email: 'aliyassine18@gmail.com'
            })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.email.should.equal('aliyassine18@gmail.com');
                done();

            });
    });
});


// test a user login
describe("test of the user creation and the login", function () {
    it("should create a user and return the object", function (done) {
        User.collection.remove();

        server
            .post("/api/createUser")
            .send({
                fullName: 'Ali Yassine',
                email: 'aliyassine18@gmail.com'
            })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.email.should.equal('aliyassine18@gmail.com');
                done();

            });
    });


    it("should be able to login", function (done) {


        server
            .post("/api/user/login")
            .send({
                email: 'aliyassine18@gmail.com'
            })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.data.email.should.equal('aliyassine18@gmail.com');
                done();

            });
    });
});


describe("Random api call", function () {


    it("should return 404 /random", function (done) {
        server
            .get("/random")
            .expect(404)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    })
});