import React from 'react';
// import heroSection from './pages/heroSection'
import Header from './components/Header';
import Page2 from './pages/Page2';
import Profile from './pages/Profile';
import Elegantproject from './pages/Elegantproject';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import CardSection from './pages/cardSection';
import HeroSection from './pages/HeroSection';
import Passionate from './pages/Passionate';
import Footer from './pages/Footer';  



const App=() =>{


  return (
   <>

    <Header/>
    <HeroSection />
    <Page2/>
    <Profile />
    <Elegantproject />
    <About />
    {/* <Passionate /> */}
    <Portfolio />
    <CardSection />
    <Footer />
   </> 
  )
}

export default App
