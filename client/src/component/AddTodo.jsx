import React , {useState}from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';


const AddTodo = () => {
    const [input , setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
        console.log("Todo added");
    }
  return (
     <div className='items-center justify-center p-4'>
        <form onSubmit={addTodoHandleSubmit} className='inline-flex w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md'>
            <input
                type="text"
                placeholder="Add a new todo"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white w-3/4 max-h-10 p-2 rounded hover:bg-blue-600"
                disabled={!input.trim()} // Disable button if input is empty
            >
                Add Todo
            </button>
        </form>
     </div>
  )
}

export default AddTodo