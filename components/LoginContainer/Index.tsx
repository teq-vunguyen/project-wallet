import React, { useState } from "react";
import Router from 'next/router'
import Image from 'next/image'
import ButtonPrimary from "@src/components/Common/ButtonPrimary";

const LoginContainer: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = () => {
    Router.push('/')
  }
  return (
    <div className="container login-page">
      <div className="login-page_form">
        <div className="login-page_bg"></div>
        <div className="text-center">
          <Image
            src="/images/Logo.png"
            className=""
            alt=""
            width="113px"
            height="160px"
          />
        </div>
        <div className="fz-40 f-bold text-center mt-24 mb-8 color-main">Ronin Wallet</div>
        <div className="mb-24 fz-14 text-center color-main">Your Digital Passport</div>

        <div className="color-sub fz-10 mb-5 ml-8 f-bold">ENTER PASSWORD</div>
        <div className="flex relative">
          <input className="login-page_input" type={passwordShown ? "text" : "password"} />
          <button className="absolute login-page_hide" onClick={togglePassword}>
            {passwordShown && <div className="absolute login-page_line"></div>}
            <Image
              src="/images/Eye.png"
              className=""
              alt=""
              width="24px"
              height="24px"
            />
          </button>
        </div>
        <ButtonPrimary text="Unlock" css="login-page_btn" isActive onClick={handleSubmit} />
      </div>
    </div>
  )
};
export default LoginContainer;
