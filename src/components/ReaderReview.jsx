import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReaderReview = () => {
   const [reviews, setReviews] = useState([])

   useEffect(() => {
      fetch('review.json')
      .then(res => res.json())
      .then(data => setReviews(data));
   },[])

   return (
      <div>
         <h2 className="bg-[#1313130D]  rounded-lg  mx-8 py-6 mt-4 mb-6 text-3xl font-bold text-center lg:mt-16 lg:mb-8">Top Reader Reviews</h2>
         <div className="grid lg:grid-cols-2 gap-6 justify-around">
            {
               reviews.map(readerReview => <ReviewCard key={readerReview.id} readerReview={readerReview}></ReviewCard>)
            }
         </div>
      </div>
   );
};

export default ReaderReview;