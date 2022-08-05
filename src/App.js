import logo from './logo.svg'
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div className="bg-[#080808] w-screen min-h-screen overflow-hidden scrollbar-hide">
       <Header/>
       <Banner/>
       <Projects/>
       <Testimonials/>
       <Contact/>
    </div>
  )
}

   
