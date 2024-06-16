import { useEffect, useState } from "react";
import QuotesCard from "./QuotesCard";

const TopQuotes = () => {
   const [quotes, setQuotes] = useState([])

   useEffect(() => {
      fetch('quotes.json')
      .then(res => res.json())
      .then(data => setQuotes(data));
   },[])

   return (
      <div>
         <h2 className="text-3xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8">Quote People Likes Most</h2>
         <div className="gap-4">
            {
               quotes.map(quotesData => <QuotesCard key={quotesData.id} quotesData={quotesData}></QuotesCard>)
            }
         </div>
      </div>
   );
};

export default TopQuotes;