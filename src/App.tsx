import Home from './components/Home'
import { Link, Route, Routes, useLocation } from'react-router-dom'
import Details from './components/Details'
import Create from './components/Create';



function App() {
  
  const {search, pathname} = useLocation();


  return (
    <div className='h-screen w-screen flex overflow-y-hidden'>

      {(pathname != '/' || search.length>0) && (
        <Link  to="/" className='text-red-500 left-[16.5%] top-[3%] absolute' >
          Home
        </Link>
      ) }

      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/create' element={<Create />}/>
      </Routes>
    </div>
    
  )
}

export default App
