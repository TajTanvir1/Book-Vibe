import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const AllBooks = () => {

   const [books, setBooks] = useState([])

   useEffect(() => {
      fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
   },[])

   return (
      <div>
         <h2 className="text-3xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8">Books</h2>
         <div className="grid lg:grid-cols-3 gap-6 justify-around">
            {
               books.map(book => <BooksCard key={book.bookId} book={book}></BooksCard>)
            }
         </div>
      </div>
   );
};

export default AllBooks;