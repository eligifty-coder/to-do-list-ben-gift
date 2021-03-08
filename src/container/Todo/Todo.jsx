import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import './Todo.css'
import Header from '../../components/Header/Header'
import DisplayTodos from '../../components/displayTodos/DisplayTodos'
import * as actions from '../../store/action'
const Todo = ()=>{
   const dispatch = useDispatch()
   const todosFromStore=useSelector(state=>{
      return state.todos.todo
   })
   const onTodoAdded = todo=>dispatch(actions.addTodo(todo))
   const onsetTodo = todo=>dispatch(actions.setTodo(todo))
   const deletedTodo= todoId => dispatch(actions.deleteTodo(todoId))
   return(
      <div className="todo">
         <Header addTodo={onTodoAdded} storedTodo={todosFromStore} setTodo={onsetTodo}/>
         <DisplayTodos todos={todosFromStore} deleteTodos={deletedTodo}/>
      </div>
   )
}
export default Todo