// AuthModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from './AuthContext';

Modal.setAppElement('#root');

const AuthModal = () => {
  const { authenticate } = useAuth();
  const [phone, setPhone] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(phone);
    setModalIsOpen(false);
  };

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
          onChange={(e) => setPhone(e.target.value)}
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
