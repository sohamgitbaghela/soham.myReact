import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import HomeComponent from './HomeComponent/HomeComponent.js';
import Navbar from './Navbar/Navbar.js';
import Login from './LoginComponent/LoginComponent.js';
import Register from './RegisterComponent/RegisterComponent.js';
import Home from './HomeComponent/HomeComponent.js';
import About from './AboutComponent/AboutComponent.js';
import Calculator from './CalculatorComponent/CalculatorComponent.js';

function App() {
  return (
    <div className="App">
        < Header />

        < Navbar />

        < Routes>
            <Route path='/calculator' element={<Calculator/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
        </Routes>
      
        < Footer />
    </div>
  );
}

export default App;
