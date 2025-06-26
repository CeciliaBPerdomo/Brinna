import Star from './Estrellas';

const Review = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex justify-end gap-1 mb-2">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default Review;
