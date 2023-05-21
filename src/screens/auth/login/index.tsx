import { FormEvent, useContext } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { TodoType } from "@/screens/types";
import { store } from "@/components/contexts";
import { toast } from "react-toastify";
import { setItem } from "localforage";
import * as React from 'react';
import {Box,Button,Container,IconButton,InputAdornment,TextField}from '@mui/material';
import * as yup from "yup";
import  VisibilityIcon  from "@mui/icons-material/Visibility";
import  VisibilityOffIcon  from "@mui/icons-material/VisibilityOff";
import { styles } from "./styles";
import { stylebtn } from "./stylebtn";
import useRegister from "./useLogin";

const RegisterSchema=yup.object({
  email:yup.string().required('this field is required!').email(),
  password:yup.string().required('this field is required!'),
})

const Login = () =>{

const{
  handleRegisterUser,
  handleSubmit,
  register,
  errors,
  passwordType,setPasswordType,
} = useRegister();




return(
 
<>
 < Navbar/> 
 <Container maxWidth="xl" className="flex">
 <div  style={{ 
      backgroundImage: `url("https://s8.uupload.ir/files/loginimg_zvbw.png")` ,
      backgroundRepeat: "no-repeat",
      backgroundSize: "80%", 
      opacity:"90%",
     }} className=' w-10/12 absolute left-36 p-20 top-4 h-screen '>
      <h1 id="username"> </h1>
      <div className="pl-14 pt-6">
      <Link to={"/Login"} className="focus:font-bold focus:underline pr-6 ">LOGIN</Link>
      <Link to={"/Signup"} className="focus:font-bold focus:underline ">SIGNUP</Link>
     </div>

  

<Box onSubmit={handleSubmit(handleRegisterUser)} sx={styles}component="form">
  <h1 className="text-neutral-400 pb-10">Welcome Back! </h1>
  <h2 className="font-bold pb-5">LOGIN</h2>


  <TextField error={Boolean(errors.email?.message)} helperText={errors.email?.message} label="Email" InputProps={{...register('password')}}/>
  <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message} type={passwordType} label="Password" InputProps={{
    endAdornment:
  
   <InputAdornment position="start">
     <IconButton onClick={()=>{
      setPasswordType((prev)=>{
        if (prev==='password') return 'text'
        return 'password'
       })
     }}>
       {passwordType ==="text" ? <VisibilityIcon/>: <VisibilityOffIcon/>}
    </IconButton>
    </InputAdornment> 
    }} />

    <Button id='submit' variant="contained"  type='submit' sx={stylebtn} > Log In </Button>
</Box>

</div>
</Container>
</>
);
};
export default Login