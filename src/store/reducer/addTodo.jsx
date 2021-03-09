import * as actionType from '../action/actionTypes'
const initialState ={todo:[]}
const todoReducer=(state=initialState, action)=>{
  switch(action.type){
    // add todo to store
     case actionType.ADD_TODO:
      const todos = [...state.todo.concat(action.todo).reduce((map, obj)=>map.set(obj.todo, obj), new Map()).values()]
        return  {...state, todo:todos}
        // delete todo from store
      case actionType.DELETE_TODO:
      const deletedTodos = state.todo.filter(item => item.id !== action.todoId)
      return {...state, todo:deletedTodos}
      default:
         return state
  }
}
export default todoReducer