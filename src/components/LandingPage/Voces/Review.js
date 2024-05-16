import React from 'react';
import Star from './Estrellas';

const Review = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex float-end">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default Review;
