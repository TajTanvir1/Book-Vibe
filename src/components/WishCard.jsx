import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from "react-router-dom";

const WishCard = ({wishData}) => {

   const { image, bookName, author, category, tags, rating, yearOfPublishing, totalPages, publisher, bookId } = wishData;

   return (
      <div className="mt-4 mb-8">
         <div className="mx-10 border rounded-xl p-4">
            <div className="flex lg:gap-10">
               <div className="bg-[#1313130D] rounded-xl p-10">
                  <img src={image} className="max-w-sm rounded-lg w-[130px]" />
               </div>
               <div>
                  <h1 className="text-2xl font-bold font-playfair my-2 text-[#131313]">{bookName}</h1>
                  <h3 className="text-base font-medium text-[#131313CC] mb-2">By: {author}</h3>

                  <h3 className="my-2 flex items-center">
                     <span className="font-bold">Tag</span>
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[0]}</span>
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[1]}</span>
                     <p className="flex ml-2"><span className="text-lg"><IoLocationOutline /></span> <span>Year of Publishing: {yearOfPublishing}</span></p>
                  </h3>

                  <div className="flex text-[#13131399] my-2">
                     <p className="flex items-center">
                        <span className="text-lg mx-2"><IoPeopleOutline /></span>
                        <span>Publisher: {publisher}</span>
                     </p>
                     <p className="flex items-center">
                        <span className="text-lg mx-2"><MdOutlineRestorePage /></span>
                        <span>Page: {totalPages}</span>
                     </p>
                  </div>
                  <hr />

                  <div className="flex gap-4">
                     <p className="text-[#328EFF]  bg-[#328EFF26] rounded-full px-4 py-2 my-2">Category: {category}</p>
                     <p className="text-[#FFAC33]  bg-[#FFAC3326] rounded-full px-4 py-2 my-2">Rating: {rating}</p>
                     <Link
                     to={`/book/${bookId}`}
                     className="text-white font-medium bg-[#23BE0A] rounded-full px-5 py-2 my-2">View Details</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WishCard;