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
import { NotFound } from './components/pages/NotFound';
import { Blog as BlogPage } from './components/pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Services setCurrentPage={setCurrentPage} />
            <Portfolio setCurrentPage={setCurrentPage} />
            <About />
            <Testimonials />
            <Blog />
            <Contact />
          </>
        );
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'custom-homes':
        return <CustomHomes setCurrentPage={setCurrentPage} />;
      case 'renovations':
        return <Renovations setCurrentPage={setCurrentPage} />;
      case 'commercial':
        return <Commercial setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'process':
        return <Process setCurrentPage={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials />;
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers setCurrentPage={setCurrentPage} />;
      case 'financing':
        return <Financing setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <NotFound setCurrentPage={setCurrentPage} />;
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