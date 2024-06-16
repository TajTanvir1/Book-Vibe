import { Link } from "react-router-dom";
import './styles.css';

const Banner = () => {
   return (
      <div className="flex justify-center">
         <div className="hero min-h-[554px] max-w-[1170px] bg-[#1313130D] rounded-2xl py-6 lg:py-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img src={'https://imgbb.host/images/2oBKS.png'} className="max-w-sm w-72 rounded-lg" />
               <div>
                  <h1 className="text-3xl lg:text-5xl font-bold max-w-[526px] font-playfair text-[#131313]">Books to freshen up your bookshelf</h1>
                  <Link to='/listedBook'><button className="btn text-white bg-[#23BE0A] mt-6 lg:mt-12 font-work">View The List</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;