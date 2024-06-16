import { useEffect, useState } from "react";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {

   const [appliedData, setAppliedData] = useState([]);
   
   useEffect(() => {
      const getReadListData = JSON.parse(localStorage.getItem("readList")) || [];
      setAppliedData(getReadListData);
   }, [])


   return (
      <div>
         {
            appliedData.map(readData => <ReadBooksCard key={readData.bookId} readData={readData}></ReadBooksCard>)
         }
      </div>
   );
};

export default ReadBooks;