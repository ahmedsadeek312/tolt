import './App.css';
import Comparison from './component/Comparison';
import Feature from './component/Feature';
import Features from './component/Features';
import Footer from './component/Footer';
import Hero from './component/Hero';
import MainFeatures from './component/MainFeatures';
import Navigation from './component/Navigation';
import Partners from './component/Partners';
import WhatWeOffer from './component/WhatWeOffer';
import WhyChooseUs from './component/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Partners />
      <Features />
      <WhatWeOffer />
      <WhyChooseUs />
      <Comparison />
      <Feature />
      <MainFeatures />
      <Footer />
    </div>
  );
}

export default App;
