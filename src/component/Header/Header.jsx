import Topbar from './Topbar/Topbar';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';

import { Routes, Route } from 'react-router';

import About from '../About/About';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team';
import Appointment from '../Appointment/Appointment';
import Login from '../LoginSignup/Login';
import Signup from '../LoginSignup/Signup';
import Submit from '../Submit/Submit';


function Header() {
  return (
    <>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path="/" element={<Banner />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Submit" element={<Submit />} />
        </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default Header;
