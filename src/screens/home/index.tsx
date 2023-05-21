import React from 'react'
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";


const HomeScreen = () => {


 
    return  ( 
   <>
    <div  style={{ 
      backgroundImage: `url("https://s8.uupload.ir/files/restaurant_1_ncvw.png")` ,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode:"multiply",
      backgroundColor:"grey",
      opacity:"99%",
     }} className='overflow-y-hidden w-full h-screen text-neutral-200 '>
     <div className=''>
      <div className='flex justify-center text-center p-64 flex-col'>
       <h1 className='text-7xl' >Welcome to Sushi Restaurant</h1>
       <p className=' text-2xl pt-10 mr-28 ml-28'>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>
       <div className='flex justify-between ml-72 mr-72 mt-20'>
       <Link to={"/About"}><button className='bg-gray-200 text-gray-900 text-3xl pl-14 pr-14 pb-3 pt-3  rounded'>ABOUT</button> </Link>
       <Link to={"/Menu"}><button className='bg-gray-200 text-gray-900 text-3xl pl-14 pr-14 pb-3 pt-3 rounded'>MENU</button> </Link>
      </div>   
      </div> 
   </div>
   </div>
    
    </>
  

);
};
export default HomeScreen;