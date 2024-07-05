import React from 'react';
import './styles.scss';
import { useAuth } from '../../auth/AuthContext';

export const Ticket = () => {
  const { guest } = useAuth();
  const contentText = `Pase para ${guest.personas} persona${
    guest.personas === 1 ? '' : 's'
  }`;
  return (
    <div className="bg-pink ticket-padding">
      <div className="ticket">
        <div className="ticket-content">
          <div className="top-cell">
            <span>{guest.title}</span>
          </div>
          <div className="bottom-cell">
            <p>{contentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
