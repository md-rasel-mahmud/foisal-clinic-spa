import aboutPic from '../../assets/images/why-choose-us-banner.png'
import Achivements from './Achivements';
import HowWeWork from './HowWeWork';

function About() {
  return (
    <>
    <section id="w-c-us">
        <div className="container">
            <h1 className="mt-5 text-center">Why choose us?</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Iusto eligendi, culpa nisi similique minus ipsum?</p>

            <div className="row d-flex  align-items-center">
                <div className="col-md-4">
                    <div className="wcus-content">
                        <h3><a href="#"><i className="fa-solid fa-gear"></i></a> Professional</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto?</p>
                    </div>
                    <div className=" wcus-content">
                        <h3><a href="#"><i className="fa-solid fa-microscope"></i></a>Professional</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto?</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center wcus-img">
                    <img className="img-fluid" src={aboutPic} alt="image"/>
                </div>
                <div className="col-md-4">
                    <div className=" wcus-content" >
                        <h3><a href="#"><i className="fa-solid fa-pills"></i></a>Professional</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto?</p>              
                    </div>
                    <div className=" wcus-content" >
                        <h3><a href="#">  <i className="fa-solid fa-atom"></i></a>Professional</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto?</p>              
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Achivements />
    <HowWeWork />
    </>
  );
}

export default About;
