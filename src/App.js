import React,{ useEffect, useState }  from 'react';
import './App.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import HeaderSection from './components/HeaderSection';
import WhatsApp from './components/WhatsApp';
import AllRight from './components/AllRight';
import Feature from './components/Feature';
import ServiceTop from './components/ServiceTop';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  },);

  return (
    <div className="">
    <div className='app'>
    <NavBar />
      <HeaderSection/>
      <AboutPage/>
      <ServiceTop/>
      <Services/>
      <Feature/>
    </div>
      <WhatsApp/>
      <AllRight/>
    </div>
  );
}

export default App;
