



function DoctorForApmnt(props) {
  return (
    <div className="avater shadow text-center bg-secondary ">
        <img className="rounded-circle w-50 my-4" src={props.imgSrc} alt=""/>

        <div className="avater-content  pb-4">
            <h4 className="text-center text-light">{props.dName}</h4>

            <p>{props.dPosition}</p>

            <a href={props.dCall}  className="btn bg-color mx-2"><i className="fas fa-phone"></i></a>
            <a href={props.dWhatsapp} className="btn bg-color mx-2"><i class="fa-brands fa-whatsapp"></i></a>
            <a href={props.dFacebook} className="btn bg-color mx-2"><i className="fab fa-facebook"></i></a>
        </div>
    </div>
  );
}

export default DoctorForApmnt;
