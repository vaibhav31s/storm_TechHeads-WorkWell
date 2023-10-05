import React from 'react'
import About from './components_landing/About';
import Hero from './components_landing/Hero';
import Support from './components_landing/Support';
import AllInOne from './components_landing/AllInOne'
import Footer from './components_landing/Footer'
import Bethero from './components_landing/Bethero'




const Landing = () => {
  return (
    <div>
      <Hero/>
      <Bethero/>
      <About/>
      <Support/>
      {/* <AllInOne /> */}
      <Footer />
    </div>
  )
}

export default Landing