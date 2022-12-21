import TeamMember from './TeamMember'

import doctorInfo from '../../doctorInfo.json'
function Team() {
  return (
    <section id="team" class="mt-4">
    <div class="container">
      <div class="row my-4">
        <h1 class="text-center">Our Doctors</h1>
      </div>

      <div class="row text-light team-content my-4 d-flex justify-content-center align-items-center">
      <TeamMember 
        imgSrc={doctorInfo[0].imgSrc}
        name={doctorInfo[0].name}
        position={doctorInfo[0].position}
      />
      <TeamMember 
        imgSrc={doctorInfo[1].imgSrc}
        name={doctorInfo[1].name}
        position={doctorInfo[1].position}
      />
      <TeamMember 
        imgSrc={doctorInfo[2].imgSrc}
        name={doctorInfo[2].name}
        position={doctorInfo[2].position}
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

export default Team;
