var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var mongoose = require('mongoose');

var db = 'mongodb://root10:password10@ds033175.mongolab.com:33175/students';
mongoose.connect(db);
var Student = require('../model/student');

var router = express.Router();

router.route('/students')
  .post(function(req, res) {

    var student = new Student();
    student.firstname = req.body.firstname;
    student.lastname = req.body.lastname;
    student.email = req.body.email;


    student.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Student created!'
      });

    });

  })
  .get(function(req, res) {
    Student.find(function(err, students) {
      if (err)
        res.send(err);

      res.json(students);
    });
  });

router.route('/students/:student_id')
  .get(function(req, res) {
    Student.findById(req.params.student_id, function(err, student) {
      if (err)
        res.send(err);

      res.json(student);
    });
  })
  .put(function(req, res) {
    Student.findById(req.params.student_id, function(err, student) {
      if (err)
        res.send(err);

      student.firstname = req.body.firstname;
      student.lastname = req.body.lastname;
      student.email = req.body.email; //update student info

      //save the student
      student.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Student Updated!!'
        });
      });
    });
  })
  .delete(function(req, res) {

    Student.findByIdAndRemove(req.params.student_id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post, {
        message: 'Successfully deleted!'
      });
    });
  });

module.exports = router;
