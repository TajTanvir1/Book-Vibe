import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
   // console.log(book);
   const { bookId, bookName, author, category, image, tags, rating } = book;
   return (
      <div className="font-work pb-10">
         <Link to={`/book/${bookId}`}>
         <div className="max-w-xs p-4 rounded-md border border-[#13131326] mx-auto">
            <img src={image} alt="" className="rounded-md bg-[#1313130D] h-[166px] py-6 px-24 mx-auto" />
            <div className="mt-6 mb-2">
               <div>
                  <h3 className="my-2">
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">{tags[0]}</span>
                     <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">{tags[1]}</span>
                  </h3>
               </div>
               <h2 className="text-2xl font-bold mt-4 font-playfair">{bookName}</h2>
            </div>
            <p className="my-3 text-[#131313CC] text-base font-medium">By: {author}</p>
            <div className="flex justify-between border-t border-dashed border-[#13131326] pt-2 text-[#131313CC] text-base font-medium">
               <p>{category}</p>
               <p className="flex items-center">{rating} <span className="text-xl px-1"><CiStar /></span></p>
            </div>
         </div>
         </Link>
      </div>
   );
};

export default BooksCard;