import Navbar from "./components/Navbar";
import { Layout  } from "./components/layout"; 
import './index.css' ;
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { TodoType } from "./screens/types";
import { useState } from "react";


const App =() =>{
const [todosList,setTodosList]=useState<TodoType[]>();

return  (
<Layout>
  <Routes>  
    {routes.map((i)=>(
    <Route key={i.path} path={i.path} element={ i.element }  />
    ))} 
    
  </Routes>
</Layout>
  ); 
};

export default App;