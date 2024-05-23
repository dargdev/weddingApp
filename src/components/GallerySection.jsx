import React from 'react';

function GallerySection() {
  return (
    <div id="gallery" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Galería de fotos</span>
            <h2 className="oliven-title">Nuestros momentos</h2>
          </div>
        </div>
        <div className="row">
          <ul className="col list-unstyled list-inline mb-0 gallery-menu" id="gallery-filter">
            <li className="list-inline-item">
              <a className="active" data-filter="*">Todo</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row gallery-filter mt-3">
          <div className="col-md-4 gallery-item ceremony">
            <a href="images/antesBoda/IMG_0046-min.JPG" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={require("../images/antesBoda/IMG_0046-min.JPG")} className="img-fluid mx-auto d-block" alt="" />
                </div>
              </div>
            </a>
          </div>
          {/* Add more gallery items here */}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
