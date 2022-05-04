import React from 'react'
import Image from 'next/image'

interface Props {
  accountNum: string
  total: string
  vnd: string
}
const CardATM: React.FC<Props> = (props) => {
  const { accountNum, total, vnd } = props
  return (
    <div className="card-atm">
      <div className="card-atm_infor flex justify-between align-center">
        <div className="card-atm_title">My Wallet<span className="ml-8">({accountNum})</span></div>
        <Image
          src="/images/Copy.png"
          className=""
          alt=""
          width="16px"
          height="16px"
        />
      </div>
      <div></div>
      <div className="card-atm_curusd mb-4">{total}</div>
      <div className="card-atm_curvnd">{vnd}</div>
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
