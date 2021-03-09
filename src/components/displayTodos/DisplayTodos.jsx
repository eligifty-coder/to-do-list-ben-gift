import React from 'react'
import { FaTrash } from 'react-icons/fa'

import './DisplayTodos.css'
// Display todo
const displayTodos=(props)=>{
   const determineTimeColor=(userTime)=>{
      const classesNames =['time']
      const currentTime = new Date().getDate();
      const AddedUserTime= new Date(userTime).getDate()
      const time = AddedUserTime - currentTime
      if(time>1){
         classesNames.push("green")
      }
      if(time<=1){
         classesNames.push("red")
      }
      return classesNames
   }
   // added urgency color 
   const checkUrgency=(timeInputted)=>{
      const lineThrough = []
      const currentTime = new Date().getDate();
      const addedUserTime = new Date(timeInputted).getDate()
      const time = addedUserTime - currentTime
      let classNames =["urgency"]
      let textToAdd 
      if(time>1){
         textToAdd = <p>you have <span style={{ color: "green", fontSize: "1rem" , fontWeight:"bold",}}>{time} </span> days to go</p>
         classNames.push("greenBefore")
      }
      if(time===1){
         textToAdd = <p> You have just 24 hours to go.Treat as <span style={{ color: "#ff2058", fontSize: "1rem", fontWeight: "bold",}}>Urgent</span></p>
      }
      if(time===0){
         textToAdd = <p> You have less than 24 hours to go.Treat as <span style={{ color: "#ff2058", fontSize: "1rem", fontWeight: "bold",}}>Urgent</span></p>
      }
      if(time<=-1){
         textToAdd = <p> <span style={{ color: "#ff2058", fontSize: "1rem", fontWeight: "bold", }}>{currentTime - addedUserTime}</span> day(s) past the due date</p>
         lineThrough.push("lineThrough")
      }
      return { text: textToAdd, styles:classNames.join(' '), listStyle:lineThrough.join(" ")}
   }
   // delete single todo
   const deletedTodo=(id)=>{
      props.deleteTodos(id)
   }
   return(
      <section className="displayTodo">
         {props.todos.length > 0 && <h2>Loaded Todos </h2>}
         <ul>
            {props.todos && props.todos.map(todo=>{
               return (
                  <li key={todo.id}>
                     <div className="item" >
                        <span className={checkUrgency(todo.dateAdded).listStyle}>{todo.todo}</span>
                        <div >
                           <span className={determineTimeColor(todo.dateAdded).join(" ")}></span>
                           <div className={checkUrgency(todo.dateAdded).styles}>{checkUrgency(todo.dateAdded).text}</div>
                        </div>
                     </div>
                     <div className="trash" onClick={deletedTodo.bind(this, todo.id)}>
                        <FaTrash  />
                     </div>
                  </li>
               )
            })}
         </ul>
      </section>
   )
}
export default displayTodos