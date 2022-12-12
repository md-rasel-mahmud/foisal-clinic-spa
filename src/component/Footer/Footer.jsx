

function Footer() {
  return (
    <section id="footer">
        <div className="container py-5">
        <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-6 mb-5 footer-responsive  d-flex flex-column align-items-start">
            <h3 className="text-light">Get in Touch</h3>
            
                <div className="social-item d-flex gap-3 justify-content-center align-items-center">     

                    <a href="#"><i className="fa-solid fa-envelope"></i></a>

                    <div className="social-address">
                        <a href="#">example@gmail.com</a><br />
                        <a href="#">example@gmail.com</a>
                    </div>
                </div>
                <div className="social-item d-flex gap-3 justify-content-center align-items-center">     

                    <a href="#"><i className="fa-solid fa-phone"></i></a>

                    <div className="social-address">
                        <a href="#">+88 012 493 181</a><br />
                        <a href="#">+88 012 493 181</a>
                    </div>
                </div>

                <div className="social-item d-flex gap-3 justify-content-center align-items-center">     

                    <a href="#"><i className="fa-solid fa-map"></i></a>

                    <div className="social-address">
                        <a href="#">Proshadpur-6550,<br /> Manda, Naogaon</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-responsive col-sm-12 footer-content d-flex flex-nowrap flex-column">
            <h3 className="text-light">Quick Links</h3>
                <a href="#"><i className="fa-solid fa-play"></i>about us</a>
                <a href="#"><i className="fa-solid fa-play"></i>blog</a>
                <a href="#"><i className="fa-solid fa-play"></i>contact us</a>
                <a href="#"><i className="fa-solid fa-play"></i>faq</a>
                <a href="#"><i className="fa-solid fa-play"></i>insurance</a>
            </div>

            <div className="col-lg-2 col-md-6 footer-responsive col-sm-12 footer-content d-flex flex-nowrap flex-column">
            <h3 className="text-light">Our Services</h3>
                <a href="#"><i className="fa-solid fa-play"></i>Work Injuries</a>
                <a href="#"><i className="fa-solid fa-play"></i>Sport Injuries</a>
                <a href="#"><i className="fa-solid fa-play"></i>Cold Laser Therapy</a>
                <a href="#"><i className="fa-solid fa-play"></i>Massage Therapy</a>
                <a href="#"><i className="fa-solid fa-play"></i>Physiotherapy</a>
                <a href="#"><i className="fa-solid fa-play"></i>Chiropratic Therapy</a>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-12">
                <h3 className="mx-5 text-light mb-2">Enquiry Form</h3>

                <form className="d-flex flex-column align-items-center" action="submit.html">
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Phone Number" type="number"/>
                    <input placeholder="Message" type="text"/>

                    <div className="btn-submit">
                    <input type="submit"/>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Footer;
