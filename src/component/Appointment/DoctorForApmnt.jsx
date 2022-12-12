
function DoctorForApmnt() {
  return (
    <div className="avater shadow text-center bg-secondary ">
        <img className="rounded-circle w-50 my-4" src="images/dr.belal.jpg" alt=""/>

        <div className="avater-content  pb-4">
            <h4 className="text-center text-light">Dr. Bellal Hossen</h4>

            <p>Medical officer-MBBS, MCPS(sugery), FCPS(surgery)</p>

            <a href="tel:+880 1812-000-000"  className="btn bg-color"><i className="fas fa-phone"></i></a>
            <a href="#" className="btn bg-color"><i className="fas fa-envelope"></i></a>
            <a href="#" className="btn bg-color"><i className="fab fa-facebook"></i></a>
        </div>
    </div>
  );
}

export default DoctorForApmnt;
