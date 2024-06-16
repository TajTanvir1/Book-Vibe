import { useEffect, useState } from "react";
import WishCard from "./WishCard";


const WishlistBooks = () => {
    
   const [appliedData, setAppliedData] = useState([]);
   
   useEffect(() => {
      const getWishListData = JSON.parse(localStorage.getItem("wishList")) || [];
      setAppliedData(getWishListData);
   }, [])

   return (
       <div>
           {
            appliedData.map(wishData => <WishCard key={wishData.bookId} wishData={wishData}></WishCard>)
         } 
       </div>
   );
};

export default WishlistBooks;