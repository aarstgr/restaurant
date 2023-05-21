import { TodoType } from '@/screens/types';
import React, { ReactElement,createContext,useState } from 'react';

/*store */

export const store = createContext({
    todosList:[],
    setTodosList:()=> {},
} as {
    todosList: TodoType[];
    setTodosList:React.Dispatch<React.SetStateAction<TodoType[]>>;

});

/*PROVIDER*/
export const StoreProvider =({children}:{children:ReactElement}) => {
    const [todosList, setTodosList]= useState<TodoType[]>([]);
    const storeValues = {
        todosList:todosList, 
        setTodosList:setTodosList,
    };
    return <store.Provider value={storeValues}>{children}</store.Provider>;
};