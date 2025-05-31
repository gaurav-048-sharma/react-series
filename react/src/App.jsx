
// import Header from "./Header"
// import {Route, Routes} from "react-router-dom"
function App() {


  return (
    <>

      <Routes>
          <h1 className='text-3xl text-center font-bold text-black bg-blue-300 my-30'>Welcome to React</h1>
          <p className='text-black text-center'>This is a simple React application.</p>
          <p className='text-black text-center'>You can add your components and routes here.</p>
          <p className='text-black text-center'>For example, you can import and use components like Currency or PassGen.</p>
          <p className='text-black text-center'>And then use them in your JSX.</p>
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </>
  )
}

export default App
