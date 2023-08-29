import React, { useState } from 'react';

const ZoomControls = ({ onZoomIn, onZoomOut, isZoomed }) => {
  return (
    <div className={`zoom-controls ${isZoomed ? 'zoomed' : ''}`}>
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

  const handleZoom = (newZoom) => {
    setZoom(newZoom);
    if (newZoom > 1) {
      document.querySelector('.zoom-controls').classList.add('zoomed');
    } else {
      document.querySelector('.zoom-controls').classList.remove('zoomed');
    }
  };

  const handleZoomIn = () => {
    const newZoom = zoom + 0.1;
    setZoom(newZoom);
  };
  
  const handleZoomOut = () => {
    if (zoom > 0.1) {
      const newZoom = zoom - 0.1;
      setZoom(newZoom);
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
        <ZoomControls onZoomIn={() => handleZoom(zoom + 0.1)} onZoomOut={() => handleZoom(zoom - 0.1)} isZoomed={zoom > 1} />
        <ScrollControls onScrollLeft={handleScrollLeft} onScrollRight={handleScrollRight} />
      </div>
    </div>
  );
};

export default Gallery;
