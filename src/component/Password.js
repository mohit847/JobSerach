import React from "react";
import { Link } from "react-router-dom";
import{Toaster, toaster} from 'react-hot-toast';
import {useFormik} from 'formik';

import profile from "../assets/profile.png"
import style from '../style/Username.module.css';
import { passwordValidate } from "../Side/validate";
export default function Password() {

  const formik = useFormik({
    initialValues:{
      Password: ''
    }, 
    validate: passwordValidate,
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
          <h4 className="text-5xl font-bold">Hello </h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            explore more by connectng with us
          </span>
        </div>
        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center items-center py-4">
            <img src={profile} className={style.profile_imag} alt="avatar" />
          </div>
          <div className="textbox  flex flex-col items-center">
            <input {...formik.getFieldProps('password')} className={style.textbox }  type="password" placeholder="Password" />
            <br></br>

            <button className={style.btn} type="submit">Sign Up</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              {" "}
              Forget password ? <Link className="text-red-500" to="/Recovery"> Recover now</Link>
            </span>
          </div>

        </form>
      </div>
      </div>
    </div>
  );
}
