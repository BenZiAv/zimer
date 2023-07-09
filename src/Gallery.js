import React, { useState } from 'react';

const ZoomControls = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="zoom-controls">
      <button onClick={onZoomIn}>Zoom In</button>
      <button onClick={onZoomOut}>Zoom Out</button>
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
         
        <span className='image_buttons'>
            <button onClick={handleScrollLeft}>Scroll Left</button>
            <button onClick={handleScrollRight}>Scroll Right</button>
            <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
        </span>
        
        <div className="gallery-container" style={{ transform: `scale(${zoom})` }}>
            <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="gallery-image"
            />
        </div>
        
    </div>
  );
};

export default Gallery;
