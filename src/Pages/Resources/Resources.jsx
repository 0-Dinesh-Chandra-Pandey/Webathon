import React from 'react'
import ResourceCard from '../../Components/Resources/Resources'
import Navbar from '../../Components/Navbar/Navbar'
import {resourcesData} from "../../Data/resources"
import "./Resource.css"
import Footer from '../../Components/Footer/Footer'

const Resources = () => {
  return (
    <div className='container'>
      <Navbar />
      
      <div className='resources-container'>
          {
            resourcesData.map((item) => {
              return <ResourceCard img={item.imgSrc} heading={item.title} description={item.text} />
            })
          }
      </div>
      
      <Footer />
      
    </div>
  )
}

export default Resources