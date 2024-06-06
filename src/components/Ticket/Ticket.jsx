import React from 'react';
import './styles.scss';
import { useAuth } from '../../auth/AuthContext';

export const Ticket = () => {
  const { guest } = useAuth();

  return (
    <div className="bg-pink">
      <div className="ticket">
        <div className="ticket-content">
          <span>{guest.title}</span>
          <p>Pase para {guest.personas} personas</p>
        </div>
      </div>
    </div>
  );
};
