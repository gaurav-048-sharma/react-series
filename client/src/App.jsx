import AddTodo from "./component/AddTodo"
import Todos from "./component/Todos"


function App() {
 
  return (
    <>
     <div className="bg-black text-white w-full items-center justify-center flex flex-col min-h-screen">
      <h1 className='text-3xl text-center font-bold text-white bg-blue-300'>Welcome to React</h1>

      <div>
        <AddTodo/>
        <Todos/>

      </div>
     </div>
    </>
  )
}

export default App
