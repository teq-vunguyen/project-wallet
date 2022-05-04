import React from "react";
import ButtonPrimary from "@src/components/Common/ButtonPrimary";
import NavBar from "@src/components/Common/NavBar";
import Router from 'next/router'


const SendContainer: React.FC = () => {
  return (
    <div className="container send-page">
      <NavBar />
      <div className="flex align-center justify-between btn-bottom">
        <ButtonPrimary text="Cancel" onClick={() => Router.back()} />
        <ButtonPrimary text="Send" isActive />
      </div>
    </div>
  )
};
export default SendContainer;
