import React, {useState} from 'react'
import Modal from '../UI/Modal/Modal'
import Card from '../UI/Card/Card'
import './Header.css'


const Header=(props)=>{

   let timer
   const [enteredTodo, setEnteredTodo]= useState("")
   const [enteredDate, setEnteredDate]= useState("")
   const [modal, setModal]= useState(false)
   const inputChange=(id, event)=>{
      clearTimeout(timer)
      switch(id){
         case "todo":
            setEnteredTodo(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1) )
            break
         case "date":
            setEnteredDate(event.target.value)
            break
         default:
            setEnteredDate("")
            setEnteredTodo("")
      }
     
   }
   // submit Button
   const submitTodo=(event)=>{
      event.preventDefault()
      if(enteredTodo==="" || enteredDate===""){
        setModal(true)
         return
      }
      props.addTodo({ todo: enteredTodo, dateAdded: enteredDate, id: new Date().getTime() })
      timer = timer = setTimeout(() => {
         setEnteredDate("")
         setEnteredTodo("")
      }, 7000)
   }
   const closeModal= ()=>{
      setModal(false)
   }
   return(
      <div className="todo-form">
         {modal && <Modal modalClosed={closeModal} show={modal}><p>What's on your mind today?</p></Modal>}
         <Card>
            <form onSubmit={submitTodo}>
               <div className="input-container">
                  <div className="form-control">
                     <label htmlFor="title">What's on your mind</label>
                     <input type="text" id="todo"  name="todo" placeholder="Visit The Beach 🏖️" onChange={(event)=>inputChange("todo", event)} value={enteredTodo} />
                  </div>
                  <div className="form-control">
                     <label htmlFor="date">Expiration Date</label>
                     <input type="date" name="date" id="date" onChange={(event)=>inputChange("date",event)}value={enteredDate} />
                  </div>
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

// let todos = [{ id: 1, name: "gift" }, { id: 2, name: "Boss" }, { id: 1, name: "tech" }]
// let i = [...todos.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];