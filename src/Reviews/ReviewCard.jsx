import React from 'react';
import reviewQuote from '../assets/reviewQuote.png'

const ReviewCard = ({ singleReview }) => {
    const {review} = singleReview
    return (
        <div>
            <div><img src={reviewQuote} alt="" /></div>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;