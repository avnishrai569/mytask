// CarouselControls.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextImage, prevImage } from '../redux/action';

const CarouselControls = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.currentImage);

  return (
    <div className='parentdiv1' >
      <button className='my-btn' onClick={() => dispatch(prevImage())}>Back</button>
      <button className='my-btn' onClick={() => dispatch(nextImage())}>Next</button>
    </div>
  );
};

export default CarouselControls;
