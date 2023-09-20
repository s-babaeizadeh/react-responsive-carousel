import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageGallery = () => {
  return (
    <div>
      <h2 style={{ padding: '10px', margin: '5px' }}>
        {' '}
        React Responsive Carousel
      </h2>
      <Carousel
        autoPlay
        interval="5000"
        showArrows={false}
        className="carousel"
      >
        <div>
          <img src="https://picsum.photos/700/400?img=22" alt="legend1" />
        </div>
        <div>
          <img src="https://picsum.photos/700/400?img=6" alt="legend2" />
        </div>
        <div>
          <img src="https://picsum.photos/700/400?img=7" alt="legend3" />
        </div>
        <div>
          <img src="https://picsum.photos/700/400?img=8" alt="legend4" />
        </div>
        <div>
          <img src="https://picsum.photos/700/400?img=9" alt="legend5" />
        </div>
        <div>
          <img src="https://picsum.photos/700/400?img=10" alt="legend6" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageGallery;
