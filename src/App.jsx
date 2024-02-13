

import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='flex flex-col lg:flex-row mx-auto mt-10'>
        <Courses></Courses>

      </div>
      
      
      
    </>
  )
}

export default App
