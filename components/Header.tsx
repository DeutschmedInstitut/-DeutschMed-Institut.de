import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-1 py-1 text-sm font-medium transition-colors duration-200 ease-in-out ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'}`;
  
  return (
    <NavLink to={to} className={navLinkClass} onClick={onClick}>
      {children}
    </NavLink>
  );
};

const MobileNavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => {
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
      `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`;

    return (
        <NavLink to={to} className={navLinkClass} onClick={onClick}>
            {children}
        </NavLink>
    );
};


const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2563eb" offset="0%"></stop><stop stopColor="#38bdf8" offset="100%"></stop></linearGradient></defs>
                <circle cx="50" cy="50" r="45" fill="url(#g)"></circle>
                <g fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M50,25 v50"></path>
                  <path d="M62.5,40 C 70,40 70,50 62.5,50 C 55,50 55,60 62.5,60 L 62.5, 75"></path>
                  <path d="M37.5,60 C 30,60 30,50 37.5,50 C 45,50 45,40 37.5,40 L 37.5, 25"></path>
                </g>
              </svg>
              <span className="text-xl font-bold text-slate-800">
                DeutschMed Institut
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem to="/about">About</NavItem>
            <NavItem to="/programs">Programs</NavItem>
            <NavItem to="/digital-health">Digital Health</NavItem>
            <NavItem to="/research">Research</NavItem>
            <NavItem to="/fsp-program">FSP Program</NavItem>
            <NavItem to="/contact">Work with us</NavItem>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
             {isLoggedIn ? (
                <>
                    <Link to="/dashboard" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600">Dashboard</Link>
                    <button onClick={onLogout} className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200">Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600">Login</Link>
                    <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up</Link>
                </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavItem to="/about">About</MobileNavItem>
                <MobileNavItem to="/programs">Programs</MobileNavItem>
                <MobileNavItem to="/digital-health">Digital Health</MobileNavItem>
                <MobileNavItem to="/research">Research</MobileNavItem>
                <MobileNavItem to="/fsp-program">FSP Program</MobileNavItem>
                <MobileNavItem to="/contact">Work with us</MobileNavItem>
            </div>
             <div className="pt-4 pb-3 border-t border-slate-200">
                <div className="px-2 space-y-2">
                {isLoggedIn ? (
                    <>
                        <MobileNavItem to="/dashboard">Dashboard</MobileNavItem>
                        <a onClick={onLogout} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Logout</a>
                    </>
                ) : (
                    <>
                        <MobileNavItem to="/login">Login</MobileNavItem>
                        <MobileNavItem to="/signup">Sign Up</MobileNavItem>
                    </>
                )}
                </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;