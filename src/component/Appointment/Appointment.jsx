import { useState } from "react";
import DoctorForApmnt from "./DoctorForApmnt";

import doctorInfo from '../../doctorInfo.json'
import { Link } from "react-router-dom";


function Appointment() {
  // default value at state from json data 
  const [selectDr, setSelectDr] = useState({
    name: 'Select the doctor from Appointment section',
    position: "",
    facebook: "",
    phone: "",
    whatsApp: "",
    imgSrc: require('../../assets/images/default-doctor.jpg')
  })

  // onclick event for select doctor to leftsidebar shows doctor information 
  const handleSelect = (e) =>{
    // search from select tag value 
    const result = doctorInfo.find(drName => drName.name === e.target.value);

      setSelectDr({
        name: result.name,
        position: result.position,
        facebook: result.facebook,
        phone: result.phone,
        whatsApp: result.whatsApp,
        imgSrc: result.imgSrc
      })
  }    

  // submit event 
  const handleSubmit = (e) =>{
    
    e.preventDefault();
    <Link to="/Submit"></Link>
    e.target.value('')
  }
  return (
    <div className="appointment ">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
                <div className="left-sidebar py-4 bg-color container  w-100">
                    <DoctorForApmnt 
                      dName={selectDr.name}
                      dPosition= {selectDr.position}
                      dCall= {selectDr.phone}
                      dFacebook= {selectDr.facebook}
                      dWhatsapp= {selectDr.whatsApp}
                      imgSrc={selectDr.imgSrc}
                    />
                </div>
            </div>
            <div className="col-lg-9 col-sm-12">
                <div className="right-sidebar">
                    <div className="login-form d-flex justify-content-start w-100 flex-column align-items-start">
                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2  rounded px-4 justify-content-center">
                  
                          <h2 className="pb-2 text-primary border-bottom my-1">Doctor Appointment!</h2>
                  
                          <div className="row gap-2">
                              <div className=" col-6 ">
                                  <select onChange={handleSelect}>
                                    <option>Select Doctor</option>
                                      {
                                        doctorInfo.map( e => <option>{e.name}</option>)
                                      }                                      
                                  </select>
                              </div>
                          </div>

                          <h3 className="pb-2 text-secondary border-bottom my-1">Fill in the forms</h3>
                          <div className="row gap-2">

                              <div className="col">
                                <input required type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                              </div>
                              <div className="col">
                                <input required type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                              </div>
                          </div>
                  
                          <div className="form-group">
                            <div className="row gap-2">
                                <div className="col">
                                  <input required type="text" className="form-control" placeholder="Phone No" aria-label="First name"/>
                                </div>
                                <div className="col">
                                  <input required type="email" className="form-control" placeholder="Email" aria-label="Last name"/>
                                </div>
                            </div>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your phone & email  with anyone else.</small>
                          </div>
                  
                          <div className="row gap-2">
                              <label for="address" className="col-form-label m-0">Address</label>
                              <div className="col-sm-7">
                                <input required type="text" className="form-control" placeholder="Village-Zip" aria-label="City"/>
                              </div>
                              <div className="col-sm">
                                <input required type="text" className="form-control" placeholder="Upazila" aria-label="State"/>
                              </div>
                              <div className="col-sm">
                                <input required type="text" className="form-control" placeholder="District" aria-label="Zip"/>
                              </div>
                          </div>

                          <button type="submit" className="btn btn-primary mb-4">Submit</button>
                        </form>
                      </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Appointment;
