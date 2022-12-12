import sliderImg_1 from '../../../assets/images/slider-1.png';
import sliderImg_2 from '../../../assets/images/banner-bg.jpg';
import sliderImg_3 from '../../../assets/images/bg1.jpg';
import sliderImg_4 from '../../../assets/images/bg2.jpg';



function Banner() {
    return (
      <section id="home">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">

              {/* slider image-1  */}
              <img src={sliderImg_1} className="d-block w-100" alt="..."/>

              <div className="carousel-caption d-none d-md-block">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content d-flex justify-content-center align-items-start flex-column">
                        <h1>We have Best Medicare
                          plan options for you</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        <a href="#">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">

              {/* slider image-2  */}
              <img src={sliderImg_2} className="d-block w-100" alt="Banner-1"/>

              <div className="carousel-caption d-none d-md-block">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content d-flex justify-content-center align-items-start flex-column">
                        <h1>We have Best Medicare
                          plan options for you</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        <a href="#">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">

              {/* slider image-3  */}
              <img src={sliderImg_3} className="d-block w-100" alt="..."/>

              <div className="carousel-caption d-none d-md-block">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content d-flex justify-content-center align-items-start flex-column">
                        <h1>We have Best Medicare plan options for you</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        <a href="#">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Card  */}
        
        <div className="card-group">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 card-hvr col-md-6 col-sm-12 px-0">
                <div className="card my-4 align-items-center">
                  <a className="social-icon" 
                  href="#"><i className="fa-solid fa-stethoscope"></i></a>
                  <div className="card-body">
                    <h5 className="card-title">best treatmenet</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 card-hvr col-md-6 col-sm-12 px-0">
                <div className="card my-4 align-items-center">
                  <a className="social-icon" 
                  href="#"><i className="fa-solid fa-kit-medical"></i></a>
                  <div className="card-body">
                    <h5 className="card-title">Emergency help</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 card-hvr col-md-6 col-sm-12 px-0">
                <div className="card my-4 align-items-center">
                  <a className="social-icon" 
                  href="#"><i className="fa-solid fa-user-nurse"></i></a>
                  <div className="card-body">
                    <h5 className="card-title">medical staff</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 card-hvr col-md-6 col-sm-12 px-0">
                <div className="card my-4 align-items-center">
                  <a className="social-icon" 
                  href="#"><i className="fas fa-user-md"></i></a>
                  <div className="card-body">
                    <h5 className="card-title">qualified doctors</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Banner;