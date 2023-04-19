import React from "react";
import { Link } from "react-router-dom";
import { Toaster, toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { useState } from "react";

import profile from "../assets/profile.png";
import style from "../style/Username.module.css";
import { passwordValidate } from "../Side/validate";
export default function Register() {

  const [file ,setFile] = useState();
  const formik = useFormik({
    initialValues: {
      // user_Id:'',
      email: "",
      Phone_number: "",
      Password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

const onUpload = async e =>{
  const base64 ='';
  setFile(base64);
}


  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center   w-auto h-4/6">
        <div className={style.glass}>
          <div className="tittle flex flex-col items-center">
            <h4 className="text-5xl font-bold ">Register </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500 ">
              Happy to join you!
            </span>
          </div>
          <form className="py-1 " onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center items-center py-2">
              <label htmlFor="profile_ig">
                <img
                  src={profile}
                  className={style.profile_imag}
                  alt="avatar"
                />
              </label>
              <input type="file" id="profile_ig" name="profile " />
            </div>
            <div className="textbox  flex flex-col items-center gap-4 ">
              {/* <input {...formik.getFieldProps('User_Id')} className={style.textbox }  type="text" placeholder="User_Id*" /> */}
              <input
                {...formik.getFieldProps("email")}
                className={style.textbox}
                type="email"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("Phone_number")}
                className={style.textbox}
                type="number"
                placeholder="Phone_number*"
              />
              <input
                {...formik.getFieldProps("Password")}
                className={style.textbox}
                type="password"
                placeholder="Password*"
              />
              {/* <input {...formik.getFieldProps('confirm_password')} className={style.textbox }  type="password" placeholder="confirm_password*" /> */}
             

              <button className={style.btn} type="submit">
                Sign Up
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                {" "}
                Forget password ?{" "}
                <Link className="text-red-500" to="/Recovery">
                  {" "}
                  Recover now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
