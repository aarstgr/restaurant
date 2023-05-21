import React from "react";
import { Textfield } from "../textfield";
import { Link } from "react-router-dom";
import {ROUTES} from "@/routes";

const Navbar =()=>{
    return(
        <>
     <header className="p-3 w-20 text-gray-200 font-bold pt-5 rounded-md bg-slate-900">
         <h1 className="hover:text-slate-900">S.</h1>
         <nav>
            <ul className="flex flex-col gap-14 ">
         <li className="focus:bg-orange-500"><Link to={ROUTES.HOME}> <img  width="40px" src="/Home.png" className=" w-7 my-1 mx-2 pt-8"/></Link></li>
         <li className="focus:bg-orange-200"><Link  to={ROUTES.LOGIN}> <img  width="40px" src="/Login.png" className=" w-7 my-1 mx-2"/></Link></li> 
         <li className="focus:bg-orange-200"><Link  to={ROUTES.MENU}> <img width="40px" src="menuwhite.png" className=" w-7 my-1 mx-2 "/></Link></li>
         <li className="focus:bg-orange-500 "><Link  to={ROUTES.ORDER}> <img  width="40px" src="/shopping.png" className="w-7 my-1 mx-2"/></Link></li>
         <li className="focus:bg-orange-200"><Link  to={ROUTES.LOCATION}> <img  width="40px" src="/location.png" className=" w-7 my-1 mx-2"/></Link></li>
         <li className="focus:bg-orange-200"><Link  to={ROUTES.HOME}> <img  width="40px" src="/Exit.png" className=" w-7 my-1 mx-2"/></Link></li>
       </ul>
       </nav> 
   </header>  
   </> 
)};
     export default Navbar;
  