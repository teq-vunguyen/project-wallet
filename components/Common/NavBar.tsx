import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className='nav-bar_back' onClick={() => Router.back()}>
        <Image
          src="/images/Back.png"
          className=""
          alt=""
          width="32px"
          height="32px"
        />
      </div>
      <span className="fz-14 f-bold">Send Assets</span>
    </div>
  )
}
export default NavBar
