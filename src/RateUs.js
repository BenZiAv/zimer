import React, { useState } from 'react';

const RateUs = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitRating = () => {
    if (rating > 0) {
      // Display an alert with the submitted rating
      alert(`You submitted a rating of ${rating} stars!`);
    } else {
      alert('Please select a rating before submitting.');
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