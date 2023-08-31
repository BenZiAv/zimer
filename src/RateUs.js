import React, { useState } from 'react';

const RateUs = () => {
  const [rating, setRating] = useState(0); // State to keep track of the selected rating
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleSubmitRating = () => {
    if (rating > 0) {
      // Here you can implement logic to submit the rating to a server or perform other actions
      alert(`You submitted a rating of ${rating} stars!`);
    }
  };

  return (
    <div className="rate-us">
      <h2>Rate Us</h2>
      <p>We would love to hear your feedback! Please rate your experience:</p>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingClick(star)}>★</span>
        ))}
      </div>
      <button className="rate-button" onClick={handleSubmitRating} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
};

export default RateUs;