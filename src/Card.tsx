import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLInputElement> {
};
const Card = (props: any) => {
    return (
        <div
        {...props}
        className={`flex flex-col gap-2 my-2  px-2 ${props.className}`}>
        <img className="scale-50 hover:scale-150 hover:rounded ease-in duration-500" src={props.img} alt="" />
        <div className="flex justify-around">
        <p className="text-lg">{props.title}</p>
        <p className="text-base">{props.desc}</p>
       </div>
        </div>
        
 );
};

export default Card;