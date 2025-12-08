'use client';

import React from 'react';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import Cursor from '../../components/Cursor/Cursor';
import Navigation from '../../components/Navigation/Navigation';
import FAQ from '../../components/Home/FAQ/FAQ';
import Footer from '../../components/Home/Footer/Footer';

export default function FAQPage() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navigation />
      <main>
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

