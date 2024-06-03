import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar' ;
import Home from './pages/Home' ;
import Service from './pages/Service';
import Contact from './pages/Contact' ;



const App = () => {
return (
  <div className='App'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>

  </div>
)
};

export default App;