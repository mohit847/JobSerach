import React from "react";
import { Link } from "react-router-dom";
import{Toaster, toaster} from 'react-hot-toast';
import {useFormik} from 'formik';


import style from '../style/Username.module.css';
import { resetpasswordValidate } from "../Side/validate";
export default function Reset() {

  const formik = useFormik({
    initialValues:{
      Password: ''
      ,
      Confirm_Password: ''
    }, 
    validate: resetpasswordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
      console.log(values)
    }
  })
  return (
    <div className="container mx-auto">

<Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={style.glass}>
        <div className="tittle flex flex-col items-center">
          <h4 className="text-5xl font-bold">Reset Password</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Entre new password
          </span>
        </div>
        <form className="pt-20" onSubmit={formik.handleSubmit}>
          
          <div className="textbox  flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} className={style.textbox }  type="password" placeholder="New Password" />
            <input {...formik.getFieldProps('confirm_pwd')} className={style.textbox }  type="password" placeholder="Confirm Password" />

            <button className={style.btn} type="submit">Reset</button>
          </div>

         

        </form>
      </div>
      </div>
    </div>
  );
}
