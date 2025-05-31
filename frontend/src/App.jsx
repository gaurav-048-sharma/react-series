
import './App.css'
import Currency from './projects/currency'
import PassGen from './projects/PassGen'
import Github from './projects/Github.jsx'
import {Route , Routes} from 'react-router-dom'
PassGen
function App() {



  return (
    <>

    <div className='w-full max-w-md text-gray-800 dark:text-white mx-auto mt-5 rounded-lg bg-gray-100 dark:bg-gray-900 p-6 shadow-lg'>
      <h1 className='text-3xl text-center font-bold  text-gray-800 dark:text-white'>Welcome to React</h1>
      <p className='text-center text-gray-600 dark:text-gray-400'>This is a simple React application.</p>
    <Routes>
      <Route path='/passgen' element={<PassGen/>}/>
      <Route path='/currency' element={<Currency/>}/>
      <Route path='/github' element={<Github/>}/>
      {/* Add more routes as needed */}

      {/* Add more routes as needed */}

      {/* <Route path='/' element={<h2 className='text-center text-gray-600 dark:text-gray-400'>Select a project from the menu</h2>}/>
      Add more routes as needed */}
    </Routes>


</div>
    </>
  )
}

export default App
