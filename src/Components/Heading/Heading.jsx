import React from 'react'
import "./Heading.css"

const Heading = ({first, high}) => {
  return (
    <h1 className='default-heading'>{first}<span class="highlighted-head">{high}</span></h1>
  )
}

export default Heading