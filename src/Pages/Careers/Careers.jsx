import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import "./Careers.css"
import image1 from "../../assets/careers/volunteer.png"
import image2 from "../../assets/careers/intern.png"


const Careers = () => {
  return (
    <div className='container'>
      <Navbar />
      
      {/* <div className='main-container-careers'>
        <div className="career-card">
            <div className="img-container">
              <img src={image1} alt="" />
            </div>
            <div>
              <a href="#">Join as volunteer</a>
            </div>
        </div>
        <div className="career-card">
            <div className="img-container">
              <img src={image1} alt="" />
            </div>
              <a href="#">Join as intern</a>
        </div>
      </div> */}
      
      <Footer />
    </div>
  )
}

export default Careers