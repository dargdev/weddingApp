// src/components/ImageModal/ImageModal.jsx
import React from 'react';
import Modal from 'react-modal';
import './ImageModal.scss';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imgSrc }) => {
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
