import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const QuotesCard = ({quotesData}) => {

   const {id, bookName, author, quote, likes} = quotesData;

   return (
      <div>
         <article className=" lg:w-4/5 w-[95%] lg:px-6 py-6 mx-auto space-y-16 font-playfair">
            <div className="w-full mx-auto space-y-4 p-6 rounded-xl border-4 shadow-lg">
               <h1 className="text-xl lg:text-4xl font-bold flex leading-relaxed"><span className="text-[#23BE0A]">{id}.</span> <span className="lg:text-3xl mx-3"><BiSolidQuoteAltLeft /></span> {quote}</h1>
               <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
                  <a className="lg:text-xl text-center mx-auto font-bold">- <span className="underline">{author}</span> ( {bookName} )</a>
               </div>
               <p className="text-sm lg:text-lg font-medium text-center">Likes: {likes}
               </p>
            </div>
         </article>
      </div>
   );
};

export default QuotesCard;