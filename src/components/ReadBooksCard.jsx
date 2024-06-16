import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBooksCard = ({ readData }) => {
   // console.log(readData);
   const { image, bookName, author, category, tags, rating, yearOfPublishing, totalPages, publisher, bookId } = readData;

   return (
      <div className="mt-4 mb-8 mx-2">
         <div className="lg:mx-10 border rounded-xl lg:p-4">
            <div className="flex flex-col lg:flex-row lg:gap-10">
               <div className="bg-[#1313130D] rounded-xl p-4 lg:p-10">
                  <img src={image} className="max-w-sm rounded-lg w-[130px] mx-auto" />
               </div>
               <div>
                  <h1 className="text-2xl font-bold font-playfair my-2 text-[#131313]">{bookName}</h1>
                  <h3 className="text-base font-medium text-[#131313CC] mb-2">By: {author}</h3>

                  <div>
                  <h3 className="my-2 flex items-center">
                     <span className="font-bold">Tag</span>
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[0]}</span>
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[1]}</span>
                     
                  </h3>
                  <h2 className="flex ml-2"><span className="text-lg"><IoLocationOutline /></span> <span>Year of Publishing: {yearOfPublishing}</span></h2>
                  </div>

                  <div className="flex flex-col lg:flex-row text-[#13131399] my-2">
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

                  <div className="flex flex-col lg:flex-row lg:gap-4 text-center">
                     <p className="text-[#328EFF]  bg-[#328EFF26] rounded-full px-2 lg:px-4 py-2 my-2">Category: {category}</p>
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

export default ReadBooksCard;