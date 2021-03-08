import React from 'react'
import './Backdrop.css'
const backdrop = ({ show, clicked, }) => {
   return (
      show && <div className='Backdrop' onClick={clicked}></div> 
   )
}
export default backdrop