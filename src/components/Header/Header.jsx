import React from 'react'
import Card from '../UI/Card/Card'
import './Header.css'
const Header=({})=>{
   return(
      <div className="todo-form">
         <Card>
            <form>
               <div className="form-control">
                  <label htmlFor="title">To do</label>
                  <input type="text" id="title" date="title" name="title" />
               </div>
               <div className="form-control">
                  <label htmlFor="date">Expiration Date</label>
                  <input type="date" name="date" id="date" />
               </div>
               <div className="form-action">
                  <button type="submit">Add Todo</button>
               </div>
            </form>
         </Card>
      </div>
   )
}
export default Header