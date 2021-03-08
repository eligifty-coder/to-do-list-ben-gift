import * as actionType from '../action/actionTypes'
const initialState ={todo:[]}
const todoReducer=(state=initialState, action)=>{
  switch(action.type){
     case actionType.ADD_TODO:
      const todos = [...state.todo.concat(action.todo).reduce((map, obj)=>map.set(obj.todo, obj), new Map()).values()]
        return  {...state, todo:todos}
      // case actionType.REMOVE_DUPLICATE_TODO:
      // const dupTodos = [...new Set(state.todo)]
      // return {...state, todo:dupTodos}
      default:
         return state
  }
}
export default todoReducer