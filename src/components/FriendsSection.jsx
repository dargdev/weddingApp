import React from 'react';

function FriendsSection() {
  return (
    <div id="friends" className="friends section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Mensajes para los novios</span>
          </div>
        </div>
        <div className="row row-nowrap" id="confirmed" style={{ maxHeight: '360px', overflowY: 'scroll' }}>
        </div>
      </div>
    </div>
  );
}

export default FriendsSection;
