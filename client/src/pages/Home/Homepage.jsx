import { Button, Card} from "@material-ui/core";
import React, { useState } from "react";
import { ListGroup, Table, Modal,Row } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { format } from 'date-fns'; 
import axios from 'axios';
import "./Homepage.css";
//import React from "react";


const Homepage = props => {
  const [inventory, inventorydata] = useState([]);
  const [searchVendorName, setSearchVendorName] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchNextHearing, setSearchNextHearing] = useState("");
  const [filteredData,setFilteredData] = useState(inventory);

  //use effect load all data
  React.useEffect(() => {
			//const fetchdata = async () => {
        //const getData = 
        //await 
        axios("http://localhost:4000/api/courtdetails").then(response => {
          console.log(response.data)
          inventorydata(response.data);
          setFilteredData(response.data);
         }).catch(error => {
            console.log('Error getting fake data: ' + error);
            })
        //const data = await getData.json();
        //inventorydata(data)
			//}
			//fetchdata()
		},[])

      //Get Case by Number
  const getCasebyNumber = async () => {
    let value = searchVendorName;
    let result = [];
    console.log(value);
    result = inventory.filter((data) => {
    return data.CaseNo.search(value) != -1;
    });
    setFilteredData(result);
  };

  // Get Caseby Name
  const getCasebyName = async () => {
    let value = searchStatus;
    let result = [];
    console.log(value);
    result = inventory.filter((data) => {
    return data.CaseName.search(value) != -1;
    });
    setFilteredData(result);
  };
  
  // Get Caseby Name
  const getCasebyDate = async () => {
    let value = searchNextHearing//format(new Date(searchNextHearing), 'MM/dd/yyyy');
    let result = [];
    console.log(value);
    result = inventory.filter((data) => {
    return data.NextHearing.search(value) != -1;
    });
    setFilteredData(result);
  };

  //on key press search vendor
  const handleKeypress = e => {
    //it triggers by pressing the enter key
    console.log("key pressed", e.key)
    if (e.key === 'Enter') {
      searchVendor();
      console.log("key pressed", e.key)
    }
};

  // For search
  //  SEARCH VENDOR BY NAME
  const searchVendor = () => {
    if (searchVendorName != "")
    {
      //Search by Case Number
      getCasebyNumber()

      
    }
    else if ((searchVendorName == "") && (searchStatus !="")) {
      //Search By Case Name
      getCasebyName();
    }
    else if ((searchVendorName == "") && (searchStatus =="") && (searchNextHearing !="") ){
      // Search By Date
      getCasebyDate();
    }
    else {
      setFilteredData(inventory)
      //alert("Fill at least on filed")
    }
    // clear the text field once searching is done
    setSearchVendorName("");
    setSearchStatus("");
    setSearchNextHearing("");
  };

return (
    <div className="viewInventory">
      {/* search by vendor */}
      <div className="viewInventory__top">
        {/* input and search button to search for the vender */}
        <div className="viewInventory__topTableAndSearchSection">
          <div className="viewInventory__topInput">
              <div className="Input">
                  <input
                    type="text"
                    placeholder="Search by Case Number"
                    onChange={(e) => setSearchVendorName(e.target.value)}
                    value={searchVendorName}
                    onKeyPress={handleKeypress}
                  />{" "}
              </div>
              <div className="Status">
                <input
                    type="text"
                    placeholder="Search by Case Name"
                    onChange={(e) => setSearchStatus(e.target.value)}
                    value={searchStatus}
                    onKeyPress={handleKeypress}
                  />{" "}
              </div>
              <div className="Next_Hearing">
                <TextField
                  id="datetime-local"
                  type="date"
                  defaultValue=""
                  className="Next_Hearing"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setSearchNextHearing(e.target.value)}
                  value={searchNextHearing}
                  onKeyPress={handleKeypress}
                />
                </div>
              <Button onClick={searchVendor}>Search</Button>
          </div>
          <div className="viewInventory__topTableHeading">
            <Table responsive striped bordered hover>
              <thead>
                {/* Headings of the table */}
                <tr>
                  <th>CASE NO</th>
                  <th>CASE NAME</th>
                  <th>LAST HEARING</th>
                  <th>NEXT HEARING</th>
                  <th>CASE STATUS</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
        <div className="viewInventory__topTableBody">
          <Table responsive striped bordered hover variant="dark">
            <tbody>
              	{/* Creating dummy data with 20 rows */}
                {filteredData.map((inv, index)=>{
                  return(
                    <tr className="rowOdd"  key={inv.index}>
                    <td >{inv.CaseNo}</td>
                    <td >{inv.CaseName}</td>
                    <td >{format(new Date(inv.LastHearing), 'MM/dd/yyyy kk:mm:ss')}</td>
                    <td >{format(new Date(inv.NextHearing), 'MM/dd/yyyy kk:mm:ss')}</td>
                    <td >{inv.CaseStatus}</td>								
                    </tr>			
                  )
                })}
                {/*inventory.map ((inv, index) =>(            
												
                ))*/}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Homepage;