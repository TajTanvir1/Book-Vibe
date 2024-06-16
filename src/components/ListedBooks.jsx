import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {

   const [tabIndex, setTabIndex] = useState(0)

   return (
      <div className="font-work">
         <h2 className="bg-[#1313130D]  rounded-lg text-center lg:mx-8 mx-2 py-6 mt-4 mb-6 text-2xl font-bold">Listed Books</h2>
         {/* Sort List */}
         <div className="text-center">
            <details className="dropdown">
               <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-semibold">Sort by<FaChevronDown /></summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box px-2 text-nowrap text-center w-44">
                  <li><a>Rating</a></li>
                  <li><a>Number of pages</a></li>
                  <li><a>Published year</a></li>
               </ul>
            </details>
         </div>
         <div className="">
            <div className="flex ml-8 lg:overflow-y-hidden">
               <Link
                  to={``}
                  onClick={() => setTabIndex(0)}
                  className={`flex items-center flex-shrink-0 lg:px-5 px-2 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg' : 'border-b'}  border-gray-400 text-black`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Read Books</span>
               </Link>
               <Link
                  to={`wishlist`}
                  onClick={() => setTabIndex(1)}
                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}  border-gray-400 text-black`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Wishlist Books</span>
               </Link>
            </div>
         </div>
         <Outlet></Outlet>
      </div>
   );
};

export default ListedBooks;