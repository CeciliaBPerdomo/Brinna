import React from 'react';

const Star = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? '#FF7968' : '#D1C4C5'}
      stroke="#FF7968"
      className="estrellas_voces" //1.5rem
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.757 5.411a1 1 0 00.95.69h5.683c.969 0 1.371 1.24.588 1.81l-4.596 3.334a1 1 0 00-.364 1.118l1.757 5.411c.3.921-.755 1.688-1.538 1.118l-4.596-3.334a1 1 0 00-1.176 0l-4.596 3.334c-.783.57-1.838-.197-1.538-1.118l1.757-5.411a1 1 0 00-.364-1.118L2.049 10.838c-.783-.57-.38-1.81.588-1.81h5.683a1 1 0 00.95-.69l1.757-5.411z"
      />
    </svg>
  );
};

export default Star;
