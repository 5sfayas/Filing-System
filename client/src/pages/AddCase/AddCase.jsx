import { Button } from "@material-ui/core";
import { Alert, Tab } from "bootstrap";
import React, { useState } from "react";
import { FormControl, InputGroup, Tabs } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import "./AddCase.css";

function AddCase() {
  // insert variables
  const [insertCaseNo, setInsertCaseNo] = useState("");
  const [insertCaseName, setInsertCaseName] = useState("");
  const [insertLastHearing, setInsertLastHearing] = useState(new Date().getFullYear()+"-"+('0'+ (new Date().getMonth()+1)).slice(-2)+"-"+new Date().getDate());
  const [insertNextHearing, setInsertNextHearing] = useState(new Date().getFullYear()+"-"+('0'+ (new Date().getMonth()+1)).slice(-2)+"-"+new Date().getDate());
  const [insertStatus, setInsertStatus] = useState("");

  // update variables
  const [updateBrand, setUpdateBrand] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateVendor, setUpdateVendor] = useState("");
  const [updateMyPayment, setUpdateMyPayment] = useState("");
  const [updateQuantity, setUpdateQuantity] = useState("");
  const [updatePayDate, setUpdatePayDate] = useState("");
  const [updateOriginalPrice, setUpdateOriginalPrice] = useState("");
  const [updateSellingPrice, setupdateSellingPrice] = useState("");
  const [itemCode,setItemCode] = useState();
  // Insert and Update color change
  const [insertColor, setInsertColor] = useState(true);

  // this is the insert method
  const insertRecord = () => {
    // field validation
    if (
      !insertStatus ||
      !insertNextHearing ||
      !insertLastHearing ||
      !insertCaseName ||
      !insertCaseNo
    ) {
      alert("Please fill all the fields!");
    }
	else{
            //send add case data
		  }
		
		  // clearing all the fields after backend implementation
		  setInsertCaseNo('');
		  setInsertStatus('');
		  setInsertCaseName('');
		  setInsertNextHearing(new Date().getFullYear()+"-"+('0'+ (new Date().getMonth()+1)).slice(-2)+"-"+new Date().getDate());
		  setInsertLastHearing(new Date().getFullYear()+"-"+('0'+ (new Date().getMonth()+1)).slice(-2)+"-"+new Date().getDate());
  };

  // this is the update method
  const updateRecord = () => {
    // field validation
    if (
      !updateBrand ||
      !updateModel ||
	  !updateOriginalPrice||
      !updateQuantity ||
      !updateSellingPrice ||
      !updateVendor
    ) {
      alert("Please fill all the fields!");
	  
    }
	else{
		//send update
		  }
    // clearing all the fields after backend implementation
    setUpdateBrand("");
    setUpdateModel("");
    setUpdateVendor("");
    setUpdateQuantity("");
    
  };
  return (
    <div className="addInventory">
      <div className="addInventory__section">
        <div className="addInventory__sectionInner">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className={` tabs ${!insertColor && "tab__insert"}`}
            onSelect={() => setInsertColor(!insertColor)}
          >
            <Tab eventKey="home" title="Add Invoice" className="tab">
              <div className="tab__details">
               
                
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="input__label" id="basic-addon3">
                      Case No
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <div className="Text">
                  <FormControl
                    placeholder="Case No"
                    aria-label="Case No"
                    aria-describedby="basic-addon3"
                    value={insertCaseNo}
                    onChange={(e) => setInsertCaseNo(e.target.value)}
                  />
                  </div>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="input__label" id="basic-addon4">
                      Case Name
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                    <div className="Text">
                    <FormControl
                      placeholder="Case Name"
                      aria-label="Case Name"
                      aria-describedby="basic-addon4"
                      value={insertCaseName}
                      onChange={(e) => setInsertCaseName(e.target.value)}
                    />
                    </div>
                </InputGroup>
              
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="input__label" id="basic-addon6">
                      Last Hearing
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                    <div className="Last_Hearing">
                        <TextField
                        id="datetime-local"
                        type="date"
                        defaultValue=""
                        className="Hearing"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setInsertLastHearing(e.target.value)}
                        value={insertLastHearing}
                        />
                    </div>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="input__label" id="basic-addon7">
                      Next Hearing
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <div className="Last_Hearing">
                    <TextField
                            id="datetime-local"
                            type="date"
                            defaultValue=""
                            className="Hearing"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setInsertNextHearing(e.target.value)}
                            value={insertNextHearing}
                            />
                            </div>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="input__label" id="basic-addon8">
                      Status
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <div className="StatusSelect">
                  <select onChange={(e) => setInsertStatus(e.target.value)} value={insertStatus}>
                  <option value = "None">Search By Case Status</option>
                  <option value = "Pending">Pending</option>
                  <option value = "Closed">Closed</option>                  
                </select>
                </div>
                </InputGroup>

                <div className="tab__buttonAction">
                  <Button onClick={insertRecord}>INSERT</Button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="profile" title="Add Items" className="tab">
              <div className="tab__details">
              
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon11"
                    >
                      Vendor
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter Vendor"
                    aria-label="Enter Vendor"
                    aria-describedby="basic-addon11"
                    value={updateVendor}
                    onChange={(e) => setUpdateVendor(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon12"
                    >
                     Brand
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter Quantity"
                    aria-label="Enter Quantity"
                    aria-describedby="basic-addon12"
                    value={updateBrand}
                    onChange={(e) => setUpdateBrand(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon13"
                    >
                      Model
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter My Payment"
                    aria-label="Enter My Payment"
                    aria-describedby="basic-addon13"
                    value={updateModel}
                    onChange={(e) => setUpdateModel(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon14"
                    >
                      Quantity
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Pay Date"
                    aria-label="Pay Date"
                    aria-describedby="basic-addon14"
                    value={updateQuantity}
                    onChange={(e) => setUpdateQuantity(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon15"
                    >
                      Original Price
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Puy Date"
                    aria-label="Puy Date"
                    aria-describedby="basic-addon15"
                    value={updateOriginalPrice}
                    onChange={(e) => setUpdateOriginalPrice(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      className="input__label"
                      id="basic-addon16"
                    >
                      Selling Price
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Total"
                    aria-label="Total"
                    aria-describedby="basic-addon16"
                    value={updateSellingPrice}
                    onChange={(e) => setupdateSellingPrice(e.target.value)}
                  />
                </InputGroup>

                <div className="tab__buttonAction">
                  <Button onClick={updateRecord}>UPDATE</Button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AddCase;
