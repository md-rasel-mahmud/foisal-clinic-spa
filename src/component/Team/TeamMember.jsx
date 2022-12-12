

function TeamMember(props) {
  return (
    <>
        <div class="card d-flex align-items-center flex-column gap-1">

            <img class="mt-4 rounded-circle" src={props.imgSrc} alt="image"/>

            <h3 class="text-center mt-2">{props.name}</h3>
            <p class="text-center">{props.position}</p>

            <div class="doctor-social my-2 text-center">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="mailto:"><i class="fa-solid fa-envelope"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>

            <button className="secondary-btn mb-2 text-light btn-info">
                <i class="fa-solid fa-file"></i> Appointment
            </button>
        </div>
    </>
  );
}

export default TeamMember;
