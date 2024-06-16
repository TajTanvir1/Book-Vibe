import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="flex flex-col items-center h-svh justify-center align-middle font-work">
         <img src={'https://i.ibb.co/wBSjhSC/Error-Pic.jpg'} alt="" className="w-40" />
         {/* <h2 className="my-6">Oooopppps!!</h2> */}
         <h2 className="my-4 text-4xl font-bold">ERROR : Wrong Page</h2>
         <Link to="/"><button className="btn btn-outline btn-accent text-xl font-semibold text-[#23BE0A]">Click here back to home</button></Link>
      </div>
   );
};

export default ErrorPage;