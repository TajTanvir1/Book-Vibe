const ReviewCard = ({readerReview}) => {

   const {id, reviewerName, author, bookName, image, review, rating, category } = readerReview;

   return (
      <div className="mt-4 mb-8">
         <div className="mx-10 border-4 shadow-md rounded-xl p-6">
            <div className="flex flex-col lg:flex-row lg:gap-10">
               <div className="bg-[#1313130D] rounded-xl p-2 h-fit">
                  <img src={image} className="max-w-sm mx-auto rounded-lg w-[130px]" />
               </div>
               <div>
                  <h1 className="text-2xl font-bold font-playfair my-2 text-[#131313]">{id}. <span className="text-xl font-medium">Reviewed by: </span> {reviewerName}</h1>
                  <h1 className="text-lg font-bold font-playfair my-2 text-[#131313]">Book: {bookName}</h1>
                  <h3 className="text-lg font-medium text-[#131313CC] mb-2">By: {author}</h3>

                  <p className="my-2">{review}</p>

                  <hr />

                  <div className="flex gap-4 my-2 text-sm lg:text-base">
                     <p className="text-[#328EFF]  bg-[#328EFF26] rounded-full px-2 lg:px-4 py-2 my-2">Category: {category}</p>
                     <p className="text-[#FFAC33]  bg-[#FFAC3326] rounded-full px-2 lg;px-4 py-2 my-2">Rating: {rating}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewCard;