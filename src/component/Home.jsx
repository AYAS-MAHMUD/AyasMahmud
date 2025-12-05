import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './Hero';
import Aboutme from '../Pages/Aboutme';
import Summary from '../Pages/Summary';
import Portfolio from '../Pages/Portfolio';
import Testimonal from '../Pages/Testimonal';
import ContactCta from '../Pages/ContactCta';
import Contact from '../Pages/Contact';

const Home = () => {

useEffect(() => {
  const lenis = new Lenis({
    duration: 0.4,     
    smooth: true,
    smoothWheel: true,
    wheelMultiplier: 2.5,  
    easing: (t) => t      
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);


  return (
    <div>
      <Hero />
      <Aboutme />
       <Summary />
      <Portfolio />
      <Testimonal />
      <ContactCta />
      <Contact /> 
    </div>
  );
};

export default Home;
