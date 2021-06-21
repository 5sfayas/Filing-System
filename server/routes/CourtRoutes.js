
module.exports = app => {
    const Court = require("../controllers/CourtController");
    // Create a new Customer
    app.post("/api/courtdetail", Court.create);
    app.get("/api/courtdetails", Court.findAll);
     // Retrieve a single Customer with customerId
    app.get("/api/courtdetail/caseid/:caseid", Court.findOne)
    // find by case name
    app.get("/api/courtdetail/casename/:casename", Court.findbycasename)
    // find by case date (nexthearing)
    app.get("/api/courtdetail/casedate/:casedate", Court.findbycasedate)

}