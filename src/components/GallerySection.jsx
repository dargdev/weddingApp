import React, { useState } from 'react';
import importAll from '../utils/importAllImages';
import Masonry from 'react-masonry-css';
import ImageModal from './ImageModal/ImageModal';

const images = importAll(
  require.context('../photos/galleryPhotos', false, /\.(png|jpe?g|svg)$/),
);
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function GallerySection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = imgSrc => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div id="gallery" className="organization section-padding bg-pink">
      <div className="container">
        <span className="oliven-title-meta" style={{ textAlign: 'center' }}>
          Galeria
        </span>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {Object.keys(images).map((key, index) => (
            <div className="gallery-item" key={index}>
              <div
                className="gallery-box"
                onClick={() => openModal(images[key])}
              >
                <div className="gallery-img">
                  <img
                    src={images[key]}
                    className="img-fluid mx-auto d-block"
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imgSrc={selectedImage}
      />
    </div>
  );
}

export default GallerySection;
