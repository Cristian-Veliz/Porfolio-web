import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './views/Landing/Landing.jsx';
import NavBarLanding from './components/NavBarLanding/NavBarLanding';
import Home from './views/Home/Home';
import About from './views/About/About';
import Proyects from './views/Proyects/Proyects';
import Contact from './views/Contact/Contact';



function App() {
  const {pathname} = useLocation();

  return (
    <div>
      {pathname !== '/' ? <NavBarLanding/> : null }
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/proyects' element={<Proyects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>      
    </div>
  )
}

export default App;
