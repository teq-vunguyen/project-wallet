import React from 'react'
import Image from 'next/image'

const CardATM: React.FC = () => {
  return (
    <div className="card-atm">
      <div className="card-atm_infor flex justify-between align-center">
        <div className="card-atm_title">My Wallet<span className="ml-8">(7300 3777 3888 3334)</span></div>
        <Image
          src="/images/Copy.png"
          className=""
          alt=""
          width="16px"
          height="16px"
        />
      </div>
      <div></div>
      <div className="card-atm_curusd mb-4">1,000 USD</div>
      <div className="card-atm_curvnd">23,046,000 VND</div>
      <span className="card-atm_icon">
        <Image
          src="/images/Logo_white.png"
          className=""
          alt=""
          width="40px"
          height="40px"
        />
      </span>
    </div>
  )
}
export default CardATM
