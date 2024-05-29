// src/components/GallerySection.js
import React from 'react';
import importAll from '../utils/importAllImages';
import Masonry from 'react-masonry-css';

const images = importAll(require.context('../photos/galleryPhotos', false, /\.(png|jpe?g|svg)$/));
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

function GallerySection() {
  return (
    <div id="gallery" className="organization section-padding bg-pink">
      <div className="container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {Object.keys(images).map((key, index) => (
            <div className="gallery-item" key={index}>
              <a href={images[key]} className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src={images[key]} className="img-fluid mx-auto d-block" alt={`Gallery ${index + 1}`} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
export default GallerySection;