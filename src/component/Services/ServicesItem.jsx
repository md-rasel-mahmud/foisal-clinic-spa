import { Link } from "react-router-dom";


function ServicesItem(props) {
    return (
      <>
          <div class="card d-flex align-items-center flex-column gap-1">
  
              <span><i className={props.iconClass}></i></span>
  
              <h3 class="text-center mt-2">{props.ServisesName}</h3>
              <p class="text-center">{props.ServicesDetail}</p>
  
              <Link to="/Appointment" className="btn my-3 text-light btn-info">
                  <i class="fa-solid fa-file"></i> Appointment
              </Link>
          </div>
      </>
    );
  }
  
  export default ServicesItem;
  