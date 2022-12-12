import DoctorForApmnt from "./DoctorForApmnt";

function Appointment() {
  return (
    <div className="appointment ">
        <div className="row">
            <div className="col-3">
                <div className="left-sidebar py-4 bg-color container  w-100">
                    <DoctorForApmnt />
                </div>
            </div>
            <div className="col-9">
                <div className="right-sidebar">
                    <div className="login-form d-flex justify-content-start w-100 flex-column align-items-start">
                        <form className="d-flex flex-column gap-2  rounded px-4 justify-content-center">
                  
                          <h1 className="pb-2 text-primary border-bottom my-1">Doctor Appointment!</h1>
                  
                          <div className="row gap-2">
                              <div className=" col-6 ">
                                  <select>
                                      <option>Select Doctors</option>
                                      <option>Dr. S Belal Hossain</option>
                                      <option>Dr. Abdus Subhan</option>
                                  </select>
                              </div>
                          </div>
                          <div className="row gap-2">

                              <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                              </div>
                              <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                              </div>
                          </div>
                  
                          <div className="form-group">
                            <div className="row gap-2">
                                <div className="col">
                                  <input type="text" className="form-control" placeholder="Phone No" aria-label="First name"/>
                                </div>
                                <div className="col">
                                  <input type="text" className="form-control" placeholder="Email" aria-label="Last name"/>
                                </div>
                            </div>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                  
                          <div className="row gap-2">
                              <label for="address" className="col-form-label m-0">Address</label>
                              <div className="col-sm-7">
                                <input type="text" className="form-control" placeholder="Village-Zip" aria-label="City"/>
                              </div>
                              <div className="col-sm">
                                <input type="text" className="form-control" placeholder="Upazila" aria-label="State"/>
                              </div>
                              <div className="col-sm">
                                <input type="text" className="form-control" placeholder="District" aria-label="Zip"/>
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
