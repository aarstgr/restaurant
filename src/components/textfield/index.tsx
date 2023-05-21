import React,{ReactElement} from "react"
import { EyeSvgIcon } from "@/assets/svgs";

interface TextfieldType extends React.InputHTMLAttributes<HTMLInputElement>{
    variant: "standard"| "email" | "password"
    label?:string;
    endIcon?:string;
}

export const Textfield = (props: TextfieldType) => {
function textfieldClassNames(){
    switch (props.variant) {
        case "standard":
             return` w-64 m-1 
           focus:border focus-within:border-blue-400 block 
           bg-slate-50  rounded border border-slate-300`
           case "password":
            return` w-64 m-1 
           focus:border focus-within:border-red-400 block 
           bg-slate-50  rounded border border-slate-300`    
        default:
            return` w-64 m-1 
            focus:border focus-within:border-green-400 block 
            bg-slate-50  rounded  border border-slate-300`
              }
            }

return (  
    <>
   
    <label htmlFor={props.id}> </label>
<div className= {`${textfieldClassNames()} flex pr-2 pt-1 m-2 rounded` }>
<input {...props} className="p-1 py-2 w-full bg-transparent outline-none "
   />
    <span>
        <EyeSvgIcon className="fill-gray-500"/>
    </span>
</div>

  </>
 );
}