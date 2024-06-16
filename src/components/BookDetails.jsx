import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveReadBooks } from "../utility/localstorage";

const BookDetails = () => {
   const books = useLoaderData();
   const { bookId } = useParams();
   const bookIdInt = parseInt(bookId);
   const book = books.find(book => book.bookId === bookIdInt);
   const { image, bookName, author, category, tags, rating, review, yearOfPublishing, totalPages, publisher } = book;

   const handleAddRead = () => {
      const readBooks = JSON.parse(localStorage.getItem("readList")) || [];
      const  checkReadList = readBooks.find((read) => read.bookId == book.bookId);
      if(checkReadList){
         toast.error("You have Already Read this Book");
      }
      else{
         readBooks.push(book);
         localStorage.setItem("readList", JSON.stringify(readBooks));
         toast("This Book added to Read List");
      }
   }

   const handleAddWish =() => {
      const readBooks = JSON.parse(localStorage.getItem("readList")) || [];
      const  checkReadList = readBooks.find((read) => read.bookId == book.bookId);
      const wishBooks = JSON.parse(localStorage.getItem("wishList")) || [];
      const  checkWishList = wishBooks.find((wish) => wish.bookId == book.bookId);
      if(checkWishList){
         toast.error("You have Already Added to Wish List");
      }
      else if(checkReadList){
         toast.error("You have Already Added to Read List");
      }
      else{
         wishBooks.push(book);
         localStorage.setItem("wishList", JSON.stringify(wishBooks));
         toast("This Book added to Wish List");
      }
   }
   return (
      <div className="font-work mx-8">
         <div>
            <div className="hero">
               <div className="hero-content flex-col lg:flex-row lg:gap-10">
                  <div className="bg-[#1313130D] rounded-xl p-16">
                     <img src={image} className="max-w-sm rounded-lg lg:w-[425px]" />
                  </div>
                  <div>
                     <h1 className="text-4xl font-bold font-playfair my-4 text-[#131313]">{bookName}</h1>
                     <h3 className="text-xl font-medium text-[#131313CC] mb-4">By: {author}</h3>
                     <hr />
                     <h3 className="text-xl font-medium text-[#131313CC] my-2">{category}</h3>
                     <hr />
                     <p className="text-[#131313B3] mt-4 font-normal text-base"><span className="text-[#131313] font-bold">Review: </span>{review}</p>

                     <h3 className="my-6">
                        <span className="font-bold">Tag</span>
                        <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[0]}</span>
                        <span className="ml-4 bg-[#23BE0A0D] py-2 px-4 rounded-full text-[#23BE0A] text-base font-medium">#{tags[1]}</span>
                     </h3>

                     <hr />

                     <div className="grid grid-cols-2 w-3/4">
                        <p className="text-[#131313B3] my-2">Number of Pages:</p> <h2 className="text-[#131313] font-semibold my-2">{totalPages}</h2>
                        <p className="text-[#131313B3]">Publisher:</p> <h2 className="text-[#131313] font-semibold">{publisher}</h2>
                        <p className="text-[#131313B3] my-2">Year of Publishing:</p> <h2 className="text-[#131313] font-semibold my-2">{yearOfPublishing}</h2>
                        <p className="text-[#131313B3] mb-4">Rating:</p> <h2 className="text-[#131313] font-semibold mb-4">{rating}</h2>
                     </div>

                     <button
                     onClick={handleAddRead}
                     className="btn btn-outline border-[#1313134D] text-[#131313] px-6">Read</button>
                     <button 
                     onClick={handleAddWish}
                     className="btn bg-[#59C6D2] text-white ml-4 px-6">Wishlist</button>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default BookDetails;