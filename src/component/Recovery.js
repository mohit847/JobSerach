import React from "react";




import style from "../style/Username.module.css";

export default function Recover() {
 

  return (
    <div className="container mx-auto">
      

      <div className="flex justify-center items-center h-screen">
        <div className={style.glass}>
          <div className="tittle flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recovery password..
            </span>
          </div>
          <form className="pt-20" >
            <div className="textbox  flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  
                  className={style.textbox}
                  type="password"
                  placeholder="OTP"
                />
              </div>

              <button className={style.btn} type="submit">
                Sign Up
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                can't get OTP ?{" "}
                <button className="text-red-500">
                  {" "}
                 Resend OTP
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
