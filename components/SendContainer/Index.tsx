import React, { useState } from "react";
import ButtonPrimary from "@src/components/Common/ButtonPrimary";
import NavBar from "@src/components/Common/NavBar";
import ModalSuccess from "@src/components/Modal/Success";
import Router from 'next/router'


const SendContainer: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container send-page">
      <NavBar />
      <div className="flex align-center justify-between btn-bottom">
        <ButtonPrimary text="Cancel" onClick={() => Router.back()} />
        <ButtonPrimary text="Send" isActive onClick={() => { setOpen(true) }} />
      </div>
      {open && <ModalSuccess handleClick={() => { setOpen(false) }} />}
    </div>
  )
};
export default SendContainer;
