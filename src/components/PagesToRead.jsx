import { useEffect, useState } from "react";
import App from "./Chart";

const PagesToRead = () => {

   const [appliedData, setAppliedData] = useState([]);
   
   useEffect(() => {
      const getReadListData = JSON.parse(localStorage.getItem("readList")) || [];
      setAppliedData(getReadListData);
   }, []);

   return (
      <div className="w-full">
         <App appliedData={appliedData}></App>
      </div>
   );
};

export default PagesToRead;