import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface ILayout {
 children: ReactElement;
}

export const Layout = ({children}:ILayout) =>{
    return (
        <>
       <ToastContainer position="top-center"/>
        <main className="min-h-screen ">{children}</main>
        <footer className="bg-slate-950 opacity-95 text-gray-500 text-center py-3 mt-10"> 
        Copyright © 2021 Sushi Restaurant
        </footer>
        </>
    )
}
 