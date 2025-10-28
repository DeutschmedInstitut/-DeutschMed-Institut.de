import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import DigitalHealthPage from './pages/DigitalHealthPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import FspProgramPage from './pages/FspProgramPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import HubPage from './pages/hub/HubPage';
import ComingSoonPage from './pages/ComingSoonPage';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from './index';

const AppLayout: React.FC<{ isLoggedIn: boolean; onLogout: () => void; }> = ({ isLoggedIn, onLogout }) => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthInitialized(true);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Logout Error:", error));
  };
  
  if (!authInitialized) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="text-xl font-semibold text-slate-700">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout isLoggedIn={!!user} onLogout={handleLogout} />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="digital-health" element={<DigitalHealthPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="fsp-program" element={<FspProgramPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="hub" element={<HubPage />} />
        <Route path="dashboard" element={user ? <DashboardPage /> : <LoginPage />} />
        <Route path="coming-soon" element={<ComingSoonPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;