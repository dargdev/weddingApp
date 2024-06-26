import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from './AuthContext';

Modal.setAppElement('#root');

const AuthModal = ({ phoneParam = '' }) => {
  const { authenticate, isAuthenticated } = useAuth();
  const [phone, setPhone] = useState(phoneParam);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    authenticate(phone);
  };
  useEffect(() => {
    if (isAuthenticated) {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if(phoneParam){
      authenticate(phone);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Phone Number Authentication"
      className="auth-modal"
      overlayClassName="auth-modal-overlay"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Ingresa tu numero celular"
          required
          pattern="\d*"
        />
        <button type="submit">Abrir</button>
      </form>
    </Modal>
  );
};

export default AuthModal;
