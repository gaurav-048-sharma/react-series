import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log("Todos:", todos)
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Todo List</h2>
        <ul className='list-disc pl-5'>
            {todos.map(todo => (
                <li key={todo.id} className='mb-2'>
                    {todo.text}
                    <button 
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
        {/* Uncomment the following section to display todos using amp */}

        {/* Todos
        {todos.amp((todo) => {
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                    Remove
                </button>
            </li>
        })} */}
    </div>
  )
}

export default Todos
