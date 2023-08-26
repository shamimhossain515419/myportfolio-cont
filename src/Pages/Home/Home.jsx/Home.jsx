
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
const Home = () => {

     const [show, setShow] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY >= 200) {
                    setShow(true);
               } else {
                    setShow(false);
               }
          };

          window.addEventListener("scroll", handleScroll);

          // Clean up the event listener when the component unmounts
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []); // Empty dependency array ensures the effect runs only once

     return (
          <div>
               <div className={`${show ? "fixed shadow-lg duration-300" : ""
                    }  w-full   z-50  overflow-hidden  py-2`}>
                    <div className=' flex justify-center  items-center gap-3'>
                         <div className=' flex justify-center  items-center gap-5'>
                              <Link className=' text-2xl font-semibold' to={'/'} > Home</Link>
                              <Link className=' text-2xl font-semibold' to={'services/'} > Services</Link>
                         </div>
                    </div>


               </div>
               <Outlet></Outlet>
          </div>
     );
};

export default Home;