import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{

}
export const Button =(props:IButton) =>{
    return <button {...props} className={`${props.className} bg-slate-900 rounded p-1 text- py-2 text-slate-200`}/>;
}
 