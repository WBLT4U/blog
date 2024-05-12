import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Blog from "./components/pagination";
import Nav from "./components/Navbar";
import Avatar from "./components/Avatar";
import { Routes, Route } from 'react-router-dom';

//Create our root component =>  App component
function App() {
    return (
    <section className="main-page">
      <Nav />
      <Avatar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/pagination' element={<Blog />}></Route>
        
      </Routes>
      
           </section>
  );
}
export default App;
