import React, { useState } from 'react';
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
import { Sitemap } from './components/pages/Sitemap';
import { NotFound } from './components/pages/NotFound';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Testimonials />
            <Blog />
            <Contact />
          </>
        );
      case 'services':
        return <Services />;
      case 'custom-homes':
        return <CustomHomes />;
      case 'renovations':
        return <Renovations />;
      case 'commercial':
        return <Commercial />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'process':
        return <Process />;
      case 'testimonials':
        return <Testimonials />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers />;
      case 'financing':
        return <Financing />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'sitemap':
        return <Sitemap />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;