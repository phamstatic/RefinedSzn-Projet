import React from "react"
import './App.css';


import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
import Information from './components/Information';
import StickerSection from './components/StickerSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Disclaimer />
    <TopNavigation />
    <Gallery />
    <Information />
    <StickerSection />
    <Footer />
    </>
  );
}

export default App;