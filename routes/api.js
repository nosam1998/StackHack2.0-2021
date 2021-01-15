const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

router.post("/employee/create", (req, res, next) => {
    const data = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        org_name: req.body.orgName,
        employee_id: req.body.employeeId,
        phone_number_mobile: req.body.mobile,
        email: req.body.email,
        photo: req.body.photo // TODO Implement Multer
    }
    
    Employee.create(data);
    return res.json(data);
});

router.get("/employee/all", (req, res, next) => {
    Employee.find().then(docs => {
        return res.json(docs);
    });
});

router.get("/employee/:count", (req, res, next) => {
    var query = Employee.find().sort('created', -1).limit(parseInt(req.params.count));
    query.execFind(function(err, docs) {
        return res.json(docs);
    });
});

router.get("/employee/:id", (req, res, next) => {
    Employee.findOne({_id: req.params.id}).then(docs => {
        return res.json(docs);
    })
});

module.exports = router;
