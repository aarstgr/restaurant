import { ReactElement } from 'react';
import HomeScreen from "@/screens/home";
import Menu from '@/screens/menu';
import Order from '@/screens/Order';
import About from '@/screens/About';
import Login from '@/screens/auth/login';
import Signup from '@/screens/auth/Signup';
import Location from '@/screens/Location';

type RouteType = {
 element:ReactElement;
 path:string;
};

export const ROUTES={MENU:"/menu", ABOUT:"/about", HOME:"/", ORDER:"/order", LOGIN:"/login",SIGNUP:"/signup", LOCATION:"/location" } 

export const routes: RouteType[] = [
{
    element: <HomeScreen/>,
    path: ROUTES.HOME,
},
{
element:<Menu/>,
path:ROUTES.MENU,
},
{
    element:<Order/>,
    path:ROUTES.ORDER,
    },
    {
        element:<About/>,
        path:ROUTES.ABOUT,
        },
        {
            element:<Login/>,
            path:ROUTES.LOGIN,
            },
            {
                element:<Signup/>,
                path:ROUTES.SIGNUP,
                },
                {
                  element:<Location/>,
                  path:ROUTES.LOCATION, 
                  },
];