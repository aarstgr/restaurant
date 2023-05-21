import React, { ReactElement, useState } from 'react';
import Card from '@/Card';
import Navbar from '@/components/Navbar';
import { store } from '@/components/contexts';
import { useContext } from 'react';
import Login from '../auth/login';
const Menu = () => {
      
   //login
   const {todosList}= useContext(store);
   console.log(todosList);

  //oredr count
    const number=useState(0);
    const numberValue=number[0];
    const setNumberValue=number[1];

    const increaseNumber=()=>{
      setNumberValue(numberValue+1);
    };

    const decreaseNumber=()=>{
      if (numberValue!=0){
      setNumberValue(numberValue-1);
    }
    };

    //more sushi's
    const [readMore,setReadMore]=useState(false);
    const hidecomponent = ()=>{
      setReadMore(false);
    };
       
    const extraContent=<div className="max-w-7xl mx-auto flex gap-1 flex-wrap">    
        <p className="extra-content">
        <div className="flex  mr-64">
        <Card
            id="testid10"
            className="w-60"
            img="/Maki-zushi.png"
            title="Maki-zushi"
            desc="15$"
            />
           <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
           </div> 
            <Card
            id="testid10"
            className="w-60"
            img="/nagiri.jpg"
            title="Nagiri"
            desc="20$"
            />
             <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
            <Card
            id="testid10"
            className="w-60"
            img="/sashimi.jfif"
            title="Sashimi"
            desc="30$"
            />
             <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
            <Card
            id="testid10"
            className="w-60"
            img="/uramaki.jfif"
            title="Uramaki"
            desc=" 20$ "
            image="/shopping-cart.png"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
             
          </div>
        </p>
    </div>
    const styles={marginLeft:"1100px"}
    const linkName=readMore?'Read Less << ':'Read More >> '
   
      return  ( 

        <>
         <div className="flex gap-5 m-2"> 
         <h2 className='absolute top-96 left-12 text-red-600 border-b-4 border-red-500 border rounded-full px-2  font-bold mt-2  '>{numberValue}</h2>
            <Navbar /> 
            
            <h2 className='absolute right-2 bg-red-200'></h2>
            
           <div className="flex flex-col">
           
            <h1 className="underline  ml-10 mt-5">MENU</h1>
            
            <div className="max-w-7xl mx-auto flex gap-1 flex-wrap">         
            <Card
            id="testid"
            className="w-60"
            img="/Rectangle 9.png"
            title="Smashed Avo"
            desc="32$"
            />
            <div className='flex flex-col'>
            <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
            <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div>    
             <Card
            id="testid100"
            className="w-60 "
            img="/Rectangle 10.png"
            title="Yin & Yang"
            desc="20$"
            />
             <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 11.png"
            title="Pancakes"
            desc="25$"
            />
              <div className='flex flex-col'>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 12.png"
            title="Huevos Rancheros"
            desc="20$"
            />
             <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 13.png"
            title="Rancheros (Tofu)"
            desc="30$"
            />
             <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 14.png"
            title="Breakkie Roll"
            desc="35$"
            />
             <div className='flex flex-col'>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div>  
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 15.png"
            title="Breakkie Roll"
            desc="20$"
            />
            <div className='flex flex-col'>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
              <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
             <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 16.png"
            title="Burrito"
            desc="23$"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
               <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 13.png"
            title="Rancheros (Tofu)"
            desc="20$"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
              <Card
            id="testid10"
            className="w-60 "
            img="/Rectangle 14.png"
            title="Breakkie Roll"
            desc="35$"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
            </div> 
            <Card
            id="testid10"
            className="w-60 "
            img="/Inarizushi.jpg"
            title="Inarizushi"
            desc="32$"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
           </div>
           <Card
            id="testid10"
            className="w-60 "
            img="/oshizushi.jpeg"
            title="oshizushi"
            desc="25$"
            />
            <div className='flex flex-col'>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1 mt-56" onClick={()=>{increaseNumber()}}>+</button>
             <button className=" border-solid border  rounded-full px-2  text-xl text-red-600 border-b-4 border-red-600 active:font-bold active:text-2xl pb-1"onClick={()=>{decreaseNumber()}}>-</button> 
           </div>

            </div>
        <a style={styles} className="rounded absolute right-7 top-3/4 read-more-link bg-slate-900 p-3 text-gray-300 w-32 " onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
        {readMore && extraContent}
        </div>
      </div>
      </>
    
  
  );
  };
  export default Menu;