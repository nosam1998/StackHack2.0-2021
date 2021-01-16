const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const mongoose = require("mongoose");

router.post("/employee/create", (req, res, next) => {
  const data = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    org_name: req.body.orgName,
    employee_id: req.body.employeeId,
    phone_number_mobile: req.body.mobile,
    email: req.body.email,
    photo: req.body.photo, // TODO Implement Multer
  };

  Employee.create(data);
  return res.json(data);
});

router.get("/employee/all", (req, res, next) => {
  Employee.find().then((docs) => {
    return res.json(docs);
  });
});

router.get("/employee/count/:count", (req, res, next) => {
  var query = Employee.find()
    .sort({ _id: -1 })
    .limit(parseInt(req.params.count));
  query.exec(function (err, docs) {
    if (err) return console.log(err);
    return res.json(docs);
  });
});

router.get("/employee/id/:id", (req, res, next) => {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (isValidObjectId) {
    Employee.findOne({ _id: req.params.id }, (err, doc) => {
      return res.json(doc);
    });
  } else {
    Employee.findOne({ employee_id: req.params.id }, (err, doc) => {
      return res.json(doc);
    });
  }
});

module.exports = router;
