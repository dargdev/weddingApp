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
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import AuthModal from './auth/AuthModal';
import { AuthProvider, useAuth } from './auth/AuthContext'; // Ensure this path is correct
import SeeYouSection from './components/SeeYouSection';
import { Ticket } from './components/Ticket/Ticket';

const ProtectedApp = () => {
  const { isAuthenticated } = useAuth();

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
              <RSVPSection />
              {/* <FriendsSection /> */}
              <Ticket />
              <GiftSection />
              <GallerySection />
              <Footer />
            </>
          )}
        </div>
      </div>
      {!isAuthenticated && <AuthModal />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  );
}
export default App;
