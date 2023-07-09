import React, { useState } from 'react';

const ZoomControls = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="zoom-controls">
      <button onClick={onZoomIn}>Zoom In</button>
      <button onClick={onZoomOut}>Zoom Out</button>
    </div>
  );
};

const ScrollControls = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="scroll-controls">
      <button onClick={onScrollLeft}>Scroll Left</button>
      <button onClick={onScrollRight}>Scroll Right</button>
    </div>
  );
};

const Gallery = ({ images }) => {
  const [zoom, setZoom] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      setZoom(zoom - 0.1);
    }
  };

  const handleScrollLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleScrollRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="gallery">
      <div className="gallery-container" style={{ transform: `scale(${zoom})` }}>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="gallery-image"
          style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
        />
      </div>
      <div className="controls-container">
        <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
        <ScrollControls onScrollLeft={handleScrollLeft} onScrollRight={handleScrollRight} />
      </div>
    </div>
  );
};

export default Gallery;
