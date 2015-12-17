var request  = require('request');
var url = 'http://localhost:3000/';

describe("Student API test", function () {
    describe("GET /", function() {
        it("status should be 200", function(done) {
            request.get(url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("Test root message", function(done) {
            request.get(url, function (error, response, body) {
                expect(JSON.parse(body).message).toBe('root of student API');
                done();
            });
        });

    });
});