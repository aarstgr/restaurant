import { Textfield } from "@/components";
import { EyeSvgIcon } from "@/assets/svgs";
import Navbar from "@/components/Navbar";  
import CardShop from "@/CardShop";
import { Button } from "@/components/button";

const Order = () => {
  
 
    return  ( 

      <>
      
      <div className="flex gap-5 m-2"> 
       <Navbar />
       <div id="" className=" w-2/3 h-50 m-10 ">
       <img  className="absolute left-24 top-80 w-72" src="chopsticks.png"></img>
       <div className="">
    <div className="  bg-neutral-200 m-auto p-1 
    border border-solid border-gray-600 border-r-4 w-1/2  text-gray-600">
      
      <div className="pl-2 pr-2 pt-16 pb-16">
        
        <form action ="">
        <div className="flex flex-col gap-2  ">
        <CardShop
            id="testid10"
            className="w-20 "
            img="/Maki-zushi.png"
            title="Smashed Avo"
            price="$20.00"
            btn="1"
            /><CardShop
            id="testid10"
            className="w-20"
            img="/nagiri.jpg"
            title="Nagiri"
            price="$32.00"
            btn="1"
            /><CardShop
            id="testid10"
            className="w-20"
            img="/sashimi.jfif"
            title="Sashimi"
            price="$25.00"
            btn="1"
            /><CardShop
            id="testid10"
            className="w-20"
            img="/uramaki.jfif"
            title="Uramaki"
            price="$20.00"
            btn="1"
            />
           </div>
           

         
          </form>
      </div>
      
    </div>
  </div>  
  </div>
    
   <div  className="flex flex-col gap-8 text-justify  justify-center  border border-solid border-neutral-300 m-10 ">
    
    <div className=" text-gray-800">
      <h1>Promo Code</h1>
      <Textfield
      variant="standard"
      />
      <Button className="rounded mt-5 ml-5 read-more-link bg-slate-900 p-3 text-gray-300 w-64 ">Apply</Button>
      </div>
    
     <div className=" bg-neutral-200  p-5 text-gray-600">
      <h1 className="my-2 text-2xl">Your Subtotal</h1>
      <h4>Subtotal  $80.00</h4>
      <Button className=" pr-5 pl-5 mt-5 rounded read-more-link bg-slate-900 p-3 text-gray-300 w-64 ">Confirm Order</Button>
    </div>

  </div>


   </div>
  </>



  

);
};
export default Order;