import React from 'react';
import { useAuth } from '../auth/AuthContext';

function Footer() {
  const { logout } = useAuth();

  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <button
                className="no-background-button"
                onDoubleClickCapture={logout}
              >
                <img src={require('../images/logo.png')} alt="" />
                <span>
                  Ariana <small>&</small> David
                </span>
              </button>
            </h2>
            <p className="copyright">17 Agosto, 2024 – Quito</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
