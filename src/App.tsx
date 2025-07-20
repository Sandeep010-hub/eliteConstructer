import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Process } from './components/pages/Process';
import { CustomHomes } from './components/pages/CustomHomes';
import { Renovations } from './components/pages/Renovations';
import { Commercial } from './components/pages/Commercial';
import { Careers } from './components/pages/Careers';
import { Financing } from './components/pages/Financing';
import { Privacy } from './components/pages/Privacy';
import { Terms } from './components/pages/Terms';
import { NotFound } from './components/pages/NotFound';
import { Blog as BlogPage } from './components/pages/Blog';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Elite Construction & Design | Southern California Builders</title>
        <meta name="description" content="Elite Construction & Design delivers premium custom homes, renovations, and commercial projects in Los Angeles and Orange County. Uncompromising quality, on-time delivery, and client satisfaction." />
        <meta property="og:title" content="Elite Construction & Design | Southern California Builders" />
        <meta property="og:description" content="Elite Construction & Design delivers premium custom homes, renovations, and commercial projects in Los Angeles and Orange County. Uncompromising quality, on-time delivery, and client satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eliteconstruction.com" />
        <meta property="og:image" content="https://eliteconstruction.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elite Construction & Design | Southern California Builders" />
        <meta name="twitter:description" content="Elite Construction & Design delivers premium custom homes, renovations, and commercial projects in Los Angeles and Orange County. Uncompromising quality, on-time delivery, and client satisfaction." />
        <meta name="twitter:image" content="https://eliteconstruction.com/og-image.jpg" />
        <link rel="canonical" href="https://eliteconstruction.com" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <Portfolio />
                  <About />
                  <Testimonials />
                  <Blog />
                  <Contact />
                </>
              } />
              <Route path="/services" element={<Services />} />
              <Route path="/custom-homes" element={<CustomHomes />} />
              <Route path="/renovations" element={<Renovations />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/process" element={<Process />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;