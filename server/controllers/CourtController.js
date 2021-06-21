const Court = require("../models/courtquery");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Customer
      const courtdetail = new Court({
        CaseNo: req.body.CaseNo,
        CaseName: req.body.CaseName,
        LastHearing: req.body.LastHearing,
        NextHearing: req.body.NextHearing,
        CaseStatus: req.body.CaseStatus
        });

     // Save Customer in the database
      Court.create(courtdetail, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};

//find all controller
exports.findAll = (req, res) => {
  Court.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};


exports.findOne = (req, res) => {
  Court.findById(req.params.caseid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.caseid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.caseid
        });
      }
    } else res.send(data);
  });
};

//find by case name controller
exports.findbycasename = (req, res) => {
  Court.findByCaseName(req.params.casename, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.casename}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.casename
        });
      }
    } else res.send(data);
  });
};


// find by case name and date controller findbycasedate
exports.findbycasedate = (req, res) => {
  Court.findByCaseDate(req.params.casedate, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.casedate}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.casedate
        });
      }
    } else res.send(data);
  });
};
