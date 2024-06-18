import React from 'react';
import './styles.scss';
import { useAuth } from '../../auth/AuthContext';

export const Ticket = () => {
  const { guest } = useAuth();

  return (
    <div className="bg-pink ticket-padding">
      <div className="ticket">
        <div className="ticket-content">
          <div className="top-cell">
            <span>{guest.title}</span>
          </div>
          <div className="bottom-cell">
            <p>Pase para {guest.personas} personas</p>
          </div>
        </div>
      </div>
    </div>
  );
};
