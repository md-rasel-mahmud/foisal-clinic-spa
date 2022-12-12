import ServicesItem from "./ServicesItem";

function Services() {
  return (
    <section id="services" class="mt-4">
    <div class="container">
      <div class="row my-4">
        <h1 class="text-center text-light pt-5 mt-5">Our Services</h1>
      </div>

      <div class="row text-light services-content d-flex justify-content-center align-items-center">

        <ServicesItem 
            iconClass='fa-solid fa-stethoscope'
            ServisesName='Ultrasonography'
            ServicesDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi inventore consequuntur ut nam eligendi dicta corporis nisi atque quos pariatur!'
        />
        <ServicesItem 
            iconClass='fas fa-hand-holding-medical'
            ServisesName='Medical Treatment'
            ServicesDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi inventore consequuntur ut nam eligendi dicta corporis nisi atque quos pariatur!'
        />
        <ServicesItem 
            iconClass='fa-solid fa-baby'
            ServisesName='Scissor Delivery'
            ServicesDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi inventore consequuntur ut nam eligendi dicta corporis nisi atque quos pariatur!'
        />
        
      </div>

    </div>
    <div class="offer-area">
        <div class="container py-5 d-flex flex-wrap justify-content-around align-items-center">      
        <h3 class="m-0 ">New Patient Special Offer Complimentary Consultation</h3>
        <a class="btn" href="#">Read more</a>
        </div>
    </div>
  </section>
  );
}

export default Services;
