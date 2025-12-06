'use client';

import React from 'react';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';
import Cursor from '../components/Cursor/Cursor';
import Navigation from '../components/Navigation/Navigation';
import Banner from '../components/Home/Banner/Banner-Enhanced';
import About from '../components/Home/About/About';
import Stats from '../components/Home/Stats/Stats';
import Services from '../components/Home/Services/Services';
import DataScraping from '../components/Home/DataScraping/DataScraping';
import Work from '../components/Home/Work/Work';
import TechStack from '../components/Home/TechStack/TechStack';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import FAQ from '../components/Home/FAQ/FAQ';
import Contact from '../components/Home/Contact/Contact';
import Footer from '../components/Home/Footer/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navigation />
      <main>
        <Banner />
        <About />
        <Stats />
        <Services />
        <DataScraping />
        <Work />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
