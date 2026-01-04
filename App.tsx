
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import TalentPage from './pages/Talent';
import Media from './pages/Media';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

const InteractiveLayout = ({ children }: { children?: React.ReactNode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Mouse Glow */}
      <div 
        className="mouse-glow md:block hidden"
        style={{ 
          transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed right-0 top-0 h-full w-[2px] bg-white/5 z-[60]">
        <div 
          className="w-full bg-white transition-all duration-75" 
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Side Labels */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block pointer-events-none">
        <div 
          className="side-label text-[10px] font-black tracking-[0.5em] text-zinc-600 transition-transform duration-500 uppercase"
          style={{ transform: `translateY(${scrollPercent * 0.5}px)` }}
        >
          AK CREATIVE STUDIO / EST. 2018
        </div>
      </div>
      
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:block pointer-events-none">
        <div 
          className="side-label text-[10px] font-black tracking-[0.5em] text-zinc-600 transition-transform duration-500 uppercase"
          style={{ transform: `translateY(-${scrollPercent * 0.5}px)` }}
        >
          GLOBAL TALENT & PRODUCTION
        </div>
      </div>

      {children}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Talent', path: '/talent' },
    { name: 'Media', path: '/media' },
    { name: 'Events', path: '/events' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Contact', path: '/contact' },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-black tracking-tighter text-white">
                ak <span className="text-zinc-500 italic">CREATIVE</span> studio
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-white ${
                      pathname === link.path ? 'text-white underline underline-offset-8' : 'text-zinc-400'
                    }`}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none z-[60] relative"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-black transition-all duration-500 flex flex-col items-center justify-center ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-500 hover:text-white transition-all transform hover:scale-110"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="absolute bottom-12 flex space-x-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={24} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black mb-4 uppercase">ak CREATIVE studio</h2>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Redefining global entertainment through meticulous talent management, visionary production, and unforgettable live experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><Link to="/talent" className="hover:text-white transition-colors">Our Roster</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Major Events</Link></li>
              <li><Link to="/bookings" className="hover:text-white transition-colors">Booking Inquiry</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Headquarters</h3>
            <p className="text-zinc-400 text-sm mb-2 leading-loose">
              1420 Entertainment Plaza<br />
              Los Angeles, CA 90028<br />
              contact@akcreative.studio
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 uppercase tracking-widest font-medium">
          <p>© 2024 ak CREATIVE studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <InteractiveLayout>
        <div className="min-h-screen flex flex-col relative z-10">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/talent" element={<TalentPage />} />
              <Route path="/media" element={<Media />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bookings" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </InteractiveLayout>
    </Router>
  );
}
