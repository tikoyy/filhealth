//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
//import ImageCarousel from '../components/ImageCarousel';
//import Hero from '../components/Hero';
//import { Grid } from '@mui/material';
//import articles from '../components/services/articles';
 
const appStyle = {
  backgroundImage: "url('https://www.philhealth.gov.ph/images/bg_green.jpg')"
}


function AboutUs() {
  return (
    <div className="App"
    style = {appStyle}>
      <div>
        <Header />
      </div>
      <div>
        <NavMenu />
      </div>
      
      
      <div>
        Links
        </div>
      <div>
        Footer
      </div>
    </div>
  );
}
export default AboutUs;