import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLinks = () => {
   return (
      <nav className='header-links font-caption'>
         <Link to='/contact'>contact us</Link>
         <p>investor login</p>
      </nav>
   )
}

export default HeaderLinks
