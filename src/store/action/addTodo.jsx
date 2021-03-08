import * as actionTypes from './actionTypes'
export const addTodo= todo=>{
   return {
      type: actionTypes.ADD_TODO,
      todo:todo,
   }
}

export const deleteTodo= id=>{
   return {
      type:actionTypes.ADD_TODO,
      todoId:id,
   }
}
export const setTodo= todo=>{
   return {
      type:actionTypes.ADD_TODO,
      todos:todo,
   }
}