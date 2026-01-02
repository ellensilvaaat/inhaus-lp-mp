import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DreamApartment from './components/Intro/Intro';
import TeamCarousel from './components/WhatYouWillFind/WhatYouWillFind';
import OurProcess from './components/Process/Process';
import VisitSection from './components/VisitSection/VisitSection';
import LocationSection from './components/LocationSection/LocationSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import Footer from './components/Footer/Footer';
import ThankYou from './components/ThankYou/ThankYou'; 

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <DreamApartment />
            <TeamCarousel />
            <OurProcess />
            <VisitSection />
            <LocationSection />
            <AdvantagesSection />
            <Footer />
          </>
        }
      />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
