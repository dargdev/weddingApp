import React from 'react';
import './css/style.scss';
import './css/animate.css';
import './css/themify-icons.css';
import './css/bootstrap.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/vegas.css';
import './css/bgzy.css';

import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CountdownSection from './components/CountdownSection';
import StorySection from './components/StorySection';
import WhenWhereSection from './components/WhenWhereSection';
import RSVPSection from './components/RSVPSection/RSVPSection';
import GiftSection from './components/GiftSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import AuthModal from './auth/AuthModal';
import { AuthProvider, useAuth } from './auth/AuthContext'; // Asegúrate de que esta ruta sea correcta
import SeeYouSection from './components/SeeYouSection';
import { Ticket } from './components/Ticket/Ticket';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProtectedApp = () => {
  const { isAuthenticated } = useAuth();
  let query = useQuery();
  let paramValue = query.get('param');

  return (
    <div className="oliven-page">
      <div className={`main-all ${!isAuthenticated ? 'blur' : ''}`}>
        <Sidebar />
        <div className="oliven-main">
          <HeroSection />
          {isAuthenticated && (
            <>
              <CoupleSection />
              <CountdownSection />
              <StorySection />
              <WhenWhereSection />
              <SeeYouSection />
              <Ticket />
              <RSVPSection />
              <GiftSection />
              <GallerySection />
              <Footer />
            </>
          )}
        </div>
      </div>
      {!isAuthenticated && <AuthModal phoneParam={paramValue} />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ProtectedApp />
      </Router>
    </AuthProvider>
  );
}

export default App;
