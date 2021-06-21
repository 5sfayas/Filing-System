const sql = require("./db");

// constructor
const court = function(Court) {
    this.CaseNo = Court.CaseNo;
    this.CaseName = Court.CaseName;
    this.LastHearing = Court.LastHearing;
    this.NextHearing = Court.NextHearing;
    this.CaseStatus = Court.CaseStatus;
  };

//Create Data
court.create = (newCourt, result) => {
    sql.query("INSERT INTO CaseDetail SET ?", newCourt, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
        }

        console.log("case detail created: ", { id: res.insertId, ...newCourt });
        result(null, { id: res.insertId, ...newCourt });
    });
};

//Find All SQL
court.getAll = result => {
    sql.query("SELECT * FROM CaseDetail ORDER BY NextHearing DESC, CaseStatus DESC", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Case Details are: ", res);
      result(null, res);
    });
  };

//Find By Case ID
court.findById = (CaseNo, result) => {
  sql.query(`SELECT * FROM CaseDetail WHERE CaseNo = "${CaseNo}" ORDER BY NextHearing DESC, CaseStatus DESC`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found CaseNo: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


//find by case name
court.findByCaseName = (CaseName, result) => {
  sql.query(`SELECT * FROM CaseDetail WHERE CaseName = "${CaseName}" ORDER BY NextHearing DESC, CaseStatus DESC`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found CaseName: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


//find by case date
court.findByCaseDate = (CaseDate, result) => {
  sql.query(`SELECT * FROM CaseDetail WHERE NextHearing >= "${CaseDate}" ORDER BY NextHearing DESC, CaseStatus DESC`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found CaseName: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = court;