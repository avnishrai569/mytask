// ImageComponent.js
import React from 'react';
import { useSelector } from 'react-redux';


const ImageComponent = () => {
  const currentImage = useSelector((state) => state.currentImage);
  const imageUrls = useSelector((state) => state.imageUrls);

  return (
    <div className='parentdiv'>
      <img className='carsoul' src={imageUrls[currentImage]} alt={`Image ${currentImage + 1}`} />
    </div>
  );
};

export default ImageComponent;
