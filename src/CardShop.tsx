import React, { ReactElement } from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    price?:string;
    img?:string;
    btn?:string |ReactElement;
};
const CardShop = (props: CardProps) => {
    return (
        <div
        {...props}
        className={`flex  gap-2 my-1  px-2 ${props.className}`}>
        <img  className="rounded-full pt-2 pb-2"  src={props.img} alt="" />
        <div className="m-5">
        <p className="text-lg pt-1 w-36 ">{props.title}</p>
        <p className="text-base  pt-4">{props.price}</p>
        </div >
        <div className="m-7 flex gap-1">-<button className="bg-white pl-3 pr-3 mb-5 ">{props.btn}</button>+</div>
        <button className="mb-6 text-lg font-bold">X</button>
        </div>
 );
}; 

export default CardShop;