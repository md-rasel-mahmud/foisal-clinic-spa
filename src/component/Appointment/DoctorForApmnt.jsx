
// import img1 from '../../assets/images/owner.jpg'

function DoctorForApmnt(props) {
  // object distructuring 
  const {dCall, imgSrc} = props;

  const doctorContact = dCall === '' ? '' :  
      <>
        <a target="_blank" href={dCall}  className="btn bg-color mx-1"><i className="fas fa-phone"></i></a>
        <a target="_blank" href={props.dWhatsapp} className="btn bg-color mx-1"><i class="fa-brands fa-whatsapp"></i></a>
        <a target="_blank" href={props.dFacebook} className="btn bg-color mx-1"><i className="fab fa-facebook"></i></a> 
      </>;

  return (
    <div className="avater shadow text-center bg-secondary ">
        <img className="rounded-circle w-50 my-4" src={imgSrc} alt="images"/>

        <div className="avater-content pb-4">
            <h4 className="text-center text-light">{props.dName}</h4>

            <p>{props.dPosition}</p>

        {
          doctorContact
        }


        </div>
    </div>
  );
}

export default DoctorForApmnt;
