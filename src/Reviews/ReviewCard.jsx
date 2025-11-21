import React from 'react';
import reviewQuote from '../assets/reviewQuote.png';

const ReviewCard = ({ singleReview }) => {
  const { review, user_photoURL, userName } = singleReview;

  return (
    <div className="bg-white border mb-10 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 w-full max-w-md mx-auto">
      
      {/* Quote Icon */}
      <div className="w-10 mb-3 opacity-70">
        <img src={reviewQuote} alt="quote" className="w-full" />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        {review}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        
        {/* User Image */}
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />

        <div>
          <h3 className="font-semibold text-gray-800 text-lg ">{userName}</h3>
          <p className="text-sm text-gray-500">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
