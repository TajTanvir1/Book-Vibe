import { Link, NavLink } from "react-router-dom";
import './styles.css';

const NavBar = () => {
      const links = <>
      <li><NavLink to="/" className={({isActive})=> isActive? 'menu-active' : 'menu-inactive'}>Home</NavLink></li>
      <li><NavLink to="/listedBook" className={({isActive})=> isActive? 'menu-active' : 'menu-inactive'}>Listed Books</NavLink></li>
      <li><NavLink to="/pagesToRead" className={({isActive})=> isActive? 'menu-active' : 'menu-inactive'}>Pages to Read</NavLink></li>
      <li><NavLink to="/readerReview" className={({isActive})=> isActive? 'menu-active' : 'menu-inactive'}>Reader Review</NavLink></li>
      <li><NavLink to="/topQuotes" className={({isActive})=> isActive? 'menu-active' : 'menu-inactive'}>Top Quotes</NavLink></li>
      
   </>
   return (
      <div>
         <div className="navbar font-work lg:mt-4">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                     {links}
                  </ul>
               </div>
               <Link to="/" className="btn btn-ghost text-xl font-bold text-[#131313] lg:ml-6">Book Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 gap-2">
               {links}
               </ul>
            </div>
            <div className="navbar-end gap-2">
               <a className="btn bg-[#23BE0A] text-white">Sign In</a>
               <a className="btn bg-[#59C6D2] text-white lg:mr-6">Sign Up</a>
            </div>
         </div>
      </div>
   );
};

export default NavBar;