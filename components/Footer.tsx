import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-base text-slate-400 hover:text-white transition-colors duration-200">
      {children}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
             <Link to="/" className="text-lg font-semibold text-white">DeutschMed Institut</Link>
            <p className="mt-4 text-sm">Innovating Digital Health, Empowering Professionals.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Programs</h4>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/programs">Capacity Building</FooterLink>
              <FooterLink to="/programs">Clinical Courses</FooterLink>
              <FooterLink to="/programs">Public Health</FooterLink>
              <FooterLink to="/fsp-program">Fachsprachprüfung Program</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Digital Health</h4>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/digital-health">Consulting</FooterLink>
              <FooterLink to="/hub">Apps & Tools</FooterLink>
              <FooterLink to="/digital-health">Analytics</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">About</h4>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/about">Our Mission</FooterLink>
              <FooterLink to="/research">Research</FooterLink>
              <FooterLink to="/privacy">Privacy / Datenschutz</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/contact">Get in touch</FooterLink>
              <li><a href="#" className="text-base text-slate-400 hover:text-white transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white transition-colors duration-200">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DeutschMed Institut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;