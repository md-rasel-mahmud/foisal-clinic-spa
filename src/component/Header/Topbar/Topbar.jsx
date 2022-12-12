import logo from '../../../assets/images/logo.png'

function Topbar() {
    return (
        <header>
            <div className="container">
                <div className="row bottom-border">      
                    <div className="col-md-6 col-lg-3  my-4 col-sm-12">
                        <img className="header-logo" src={logo} alt="Logo"/>
                    </div>

                    <div className="col-md-6 col-lg-3  my-4 col-sm-12">
                        <div className="social d-flex justify-content-end align-items-center">
                        <a href="#"><i className="fa-solid fa-clock"></i></a>
                        <div className="social-detail">
                            <h3>DOCTOR TIME: 09:00am - 9:00pm</h3>
                            <p>24 Hour Open For Emergency</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3  my-4 col-sm-12">
                        <div className="social d-flex justify-content-end align-items-center" >
                        
                            <a href="#"><i className="fa-solid fa-truck-medical"></i></a>
                            <div className="social-detail">
                                <h3>AMBOULANCE</h3>
                                <a href="tel:+">+880 1700 000 000</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3  my-4 col-sm-12">
                        <div className="social d-flex justify-content-end align-items-center">
                            <a href="#"><i className="fa-solid fa-mobile"></i></a>

                            <div className="social-detail">
                                <h3>CALL US</h3>
                                <a href="tel:+">+88 012 493 181</a>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </header>
    );
  }
  
  export default Topbar;