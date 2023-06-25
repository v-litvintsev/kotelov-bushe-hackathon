import React, { useState } from 'react';
import './SwipeButton.scss'; // Import the SCSS file for styling

const SwipeButton = () => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleTouchStart = () => {
    setIsSwiped(true);
  };

  const handleTouchEnd = () => {
    setIsSwiped(false);
  };

  return (
    <div
      className={`swipe-button ${isSwiped ? 'swiped' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      YES
    </div>
  );
};

export default SwipeButton;
