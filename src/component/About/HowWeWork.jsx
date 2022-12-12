import cardImg_1 from '../../assets/images/card-1.jpg'
import cardImg_2 from '../../assets/images/card-2.jpg'

function HowWeWork() {
  return (
    <section id="about">
        <div className="container py-5">
            <div className="row">
            
                <div className="col-md-7">
                <h1>How we works</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>

                <div className="col-md-5">
                <h1>Our creative</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </p>
                </div>

            </div>

            <div className="row d-flex justify-content-between">
            <div className="col-md-3">
                <img className="img-fluid" src={cardImg_1} alt="image"/>
                <p>Lorem ipsum dolor sit amet, </p>
                <span>April 19, 2017   |   Dr. Jon Doe</span>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
            <div className="col-md-3">
                <img className="img-fluid" src={cardImg_2} alt="image"/>
                <p>Lorem ipsum dolor sit amet, </p>
                <span>April 19, 2017   |   Dr. Jon Doe</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>

            <div className="col-md-5">
                <div className="shape-primary row my-2">
                
                <div className="col-2">
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="col-6">
                    <p>Heart Treatment</p>
                </div>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error s.it voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

                <div className="shape-secondary row my-2">
                
                <div className="col-2">
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="col-6">
                    <p>Heart Treatment</p>
                </div>
                </div>
                <div className="shape-secondary row my-2">
                
                <div className="col-2">
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="col-6">
                    <p>Heart Treatment</p>
                </div>
                </div>
                <div className="shape-secondary row my-2">
                
                <div className="col-2">
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="col-8">
                    <p>Heart Treatment</p>
                </div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center ">
                <a className="btn" href="#">read more</a>
            </div>
            </div>
        </div>
    </section>
  );
}

export default HowWeWork;
