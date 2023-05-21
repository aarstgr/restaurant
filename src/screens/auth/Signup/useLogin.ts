import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {IRegisterData} from './types';


const RegisterSchema=yup.object({
    user:yup.string().required(),
    email:yup.string().email(),
    password:yup.string().required(),
})

const useRegister = () => {
    const [passwordType, setPasswordType] =React.useState<'password'|'text'>('password');
    const {register,formState:{errors},handleSubmit}= useForm<IRegisterData>({
     resolver:yupResolver(RegisterSchema)
   })
    const handleRegisterUser=React.useCallback(
    (data:IRegisterData)=>{
    console.log(data)
   },
   [],
 )
   
    return {
        handleRegisterUser,
        handleSubmit,
        register,
        errors,
        passwordType,setPasswordType,
    } 

    
}
 
export default useRegister;
