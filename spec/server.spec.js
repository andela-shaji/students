var request  = require('request');
var faker = require('faker');
var url = 'http://localhost:3000/';

describe("Student API test", function () {
    describe("GET /", function() {
        it("return status should be 200", function(done) {
            request.get(url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("return test root message", function(done) {
            request.get(url, function (error, response, body) {
                expect(JSON.parse(body).message).toBe('root of student API');
                done();
            });
        });
    });
    describe("POST /students", function () {
        it("return status code 200", function(done) {
            firstname = faker.name.findName();;
            lastname = faker.name.findName();;
            email = faker.internet.email();

            request.post({
                    url: url + "students",
                    form: {

                        firstname: firstname,
                        lastname: lastname,
                        email: email
                    }},
                function(error, response, body) {
                    expect(response.statusCode).toBe(200);

                    expect(JSON.parse(body).firstname).toBe(firstname);
                    done();
                });
        });

        it("Expect name of student posted", function(done) {
            firstname = faker.name.findName();
            lastname = faker.name.findName();
            email = faker.internet.email();

            request.post({
                    url: url + "students",
                    form: {
                        firstname: firstname,
                        lastname: lastname,
                        email: email
                    }},
                function(error, response, body) {
                    expect(JSON.parse(body).firstname).toBe(firstname);
                    done();
                });
        });
    });




});