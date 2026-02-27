import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-[#f5f0eb] px-6 py-4 md:py-6 border-b border-mimar-accent/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* SOL: LOGO */}
        <div className="flex-1">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className="w-12 h-8 bg-gray-300/30 flex items-center justify-center border border-dashed border-mimar-accent/40 text-[7px] font-bold tracking-widest text-gray-400 uppercase">
               LOGO
            </div>
          </Link>
        </div>

        {/* ORTA: MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex flex-[2] justify-center items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`nav-link text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
                location.pathname === link.path ? 'active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* SAĞ: MOBİL MENÜ BUTONU */}
        <div className="flex-1 flex justify-end md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] p-2 text-mimar-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-1"></div>
      </div>

      {/* MOBİL AÇILIR MENÜ */}
      <div className={`absolute top-full left-0 w-full bg-[#f5f0eb] transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
        isOpen ? 'max-h-screen opacity-100 py-20 border-t border-mimar-accent/10 shadow-xl' : 'max-h-0 opacity-0 py-0'
      }`}>
        <div className="flex flex-col items-center space-y-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`relative text-[14px] font-bold uppercase tracking-[0.4em] transition-all duration-300 group ${
                location.pathname === link.path ? 'text-mimar-accent' : 'text-gray-600'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-mimar-accent transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}