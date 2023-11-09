import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './views/Landing/Landing.jsx';
import NavBarLanding from './components/NavBarLanding/NavBarLanding';


function App() {
  const {pathname} = useLocation();

  return (
    <div>
      {pathname !== '/' ? <NavBarLanding/> : null }
      <Routes>
      <Route path='/' element={<Landing/>}/>
      </Routes>      
    </div>
  )
}

export default App ;