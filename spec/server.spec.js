var request = require('request');
var faker = require('faker');
var url = 'https://su-students.herokuapp.com/';

describe("Student API test", function() {
  describe("GET /", function() {
    it("return status should be 200", function(done) {
      request.get(url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("return test root message", function(done) {
      request.get(url, function(error, response, body) {
        expect(JSON.parse(body).message).toBe('root of student API');
        done();
      });
    });
  });
  describe("POST /students", function() {
    it("return status code 200", function(done) {
      firstname = faker.name.firstName();
      lastname = faker.name.lastName();
      email = faker.internet.email();

      request.post({
          url: url + "students",
          form: {

            firstname: firstname,
            lastname: lastname,
            email: email
          }
        },
        function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
    });

    it("Expect name of student posted", function(done) {
      firstname = faker.name.firstName();
      lastname = faker.name.lastName();
      email = faker.internet.email();

      request.post({
          url: url + "students",
          form: {
            firstname: firstname,
            lastname: lastname,
            email: email
          }
        },
        function(error, response, body) {
          expect(JSON.parse(body).firstname).toBe(firstname);
          done();
        });
    });
  });

  describe("GET /students", function() {
    it("return status code 200", function(done) {
      request.get(url + "students", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("Expect student objects", function(done) {
      request.get(url + "students", function(error, response, body) {
        expect(typeof JSON.parse(body)).toBe('object');
        done();
      });
    });
  });

  describe("GET each student id", function() {
    it("return status code 200", function(done) {
      request.get(url + "students/56723b74d4a964e00fb26c19", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("Expect details of the student", function(done) {
      request.get(url + "students/56723b74d4a964e00fb26c19", function(error, response, body) {

        details = JSON.parse(body);
        expect(details.firstname).toBe('John');
        expect(details.lastname).toBe('Kariuki');
        expect(details.email).toBe('john@andela.com');
        done();
      });
    });
  });
  describe("PUT in the /students ", function() {
    it("return status code 200", function(done) {
      request.put({
          url: url + "students/56723bd3d4a964e00fb26c1a",
          form: {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email()
          }
        },
        function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
    });

    it("Expect details of updated student object", function(done) {
      request.put({
          url: url + "students/56723bd3d4a964e00fb26c1a",
          form: {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email()
          }
        },
        function(error, response, body) {
          expect(typeof JSON.parse(body)).toBe('object');
          done();
        });
    });
  });
});
