import sliderImg_1 from "../../../assets/images/slider-1.png";
import sliderImg_2 from "../../../assets/images/banner-bg.jpg";
import sliderImg_3 from "../../../assets/images/bg1.jpg";
import sliderImg_4 from "../../../assets/images/bg2.jpg";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImg_1} alt="First slide" />
        <Carousel.Caption className="d-flex w-25 text-start h-100 flex-column align-items-start justify-content-center">
          <h3>Faisal Clinic - Your Comprehensive Family Healthcare Center</h3>
          <p>
            Faisal Clinic is a comprehensive family healthcare center committed
            to providing high-quality medical services for individuals of all
            ages. From routine check-ups to specialized treatments, our
            dedicated team of medical professionals is here to cater to the
            unique healthcare needs of you and your loved ones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImg_2} alt="Second slide" />

        <Carousel.Caption className="d-flex w-25 text-start h-100 flex-column align-items-start justify-content-center">
          <h3>Advanced Technology and Expertise for Accurate Diagnoses</h3>
          <p>
            At Faisal Clinic, we leverage advanced medical technology and the
            expertise of our experienced physicians to ensure accurate
            diagnoses. Our state-of-the-art diagnostic equipment enables us to
            detect and treat a wide range of conditions promptly. Rest assured,
            our team is fully equipped to provide you with the most effective
            and precise treatment plans.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImg_3} alt="Third slide" />

        <Carousel.Caption className="d-flex w-25 text-start h-100 flex-column align-items-start justify-content-center">
          <h3>Personalized Care Tailored to Your Well-being</h3>
          <p>
            We understand that every patient is unique, with individual
            healthcare requirements and preferences. That's why we prioritize
            personalized care at Faisal Clinic. Our compassionate team takes the
            time to understand your concerns, answer your questions, and develop
            customized treatment plans that prioritize your overall well-being.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImg_4} alt="Third slide" />

        <Carousel.Caption className="d-flex w-25 text-start h-100 flex-column align-items-start justify-content-center">
          <h3>Convenient and Accessible Healthcare Services</h3>
          <p>
            Convenience and accessibility are essential aspects of healthcare.
            Faisal Clinic is conveniently located and offers flexible
            appointment scheduling to accommodate your busy lifestyle. Our
            commitment to minimizing waiting times ensures that you receive
            prompt attention and care. Trust us to provide you and your family
            with convenient and accessible healthcare services when you need
            them the most.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
