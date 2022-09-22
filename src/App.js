import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import More from './Components/More/More';
import Events from './Components/More/MoreEvents/Events';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/events' element={<Events/>}/>
        
        
      </Routes>

      

     
      
    </>
  );
}

export default App;
