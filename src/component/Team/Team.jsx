import TeamMember from './TeamMember'

import ownerImg_1 from '../../assets/images/owner.jpg'
import drImg_2 from '../../assets/images/dr.belal.jpg'
import drImg_3 from '../../assets/images/dr.abdus-subhan.jpg'
function Team() {
  return (
    <section id="team" class="mt-4">
    <div class="container">
      <div class="row my-4">
        <h1 class="text-center">Our Doctors</h1>
      </div>

      <div class="row text-light team-content my-4 d-flex justify-content-center align-items-center">
      <TeamMember 
        imgSrc={ownerImg_1}
        name="Md. Ziaur Rahman"
        position="Maneging Director(Paramadical)"
      />
      <TeamMember 
        imgSrc={drImg_2}
        name="S Belal Hossain"
        position="Medical officer-MBBS, MCPS(sugery), FCPS(surgery)"
      />
      <TeamMember 
        imgSrc={drImg_3}
        name="Dr Abdus Subhan"
        position="Medical officer-MBBS"
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
