// src/components/ImageModal/ImageModal.jsx
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './ImageModal.scss';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imgSrc }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="image-modal-content"
      overlayClassName="image-modal-overlay"
      contentLabel="Image Modal"
    >
      <button className="image-modal-close" onClick={onRequestClose}>
        &times;
      </button>
      <img src={imgSrc} alt="Modal Content" className="image-modal-img" />
    </Modal>
  );
};

export default ImageModal;
