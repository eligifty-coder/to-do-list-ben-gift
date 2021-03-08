import React from 'react'
import './Modal.css'
import Backdrop from '../baackdrop/Backdrop'
const modal =props=>{
  return (
     <div>
        <div className="Modal">
           {props.children}
        </div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
     </div>
  )
}
export default modal