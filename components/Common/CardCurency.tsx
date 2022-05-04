import React from 'react'
import Image from 'next/image'

interface Props {
  type: string
  total: string
  totalVnd: string
}
const CardCurency: React.FC<Props> = (props) => {
  const { type, total, totalVnd } = props
  return (
    <div className="card-curency">
      <div className="card-curency_img">
        <Image
          src={"/images/" + type + ".png"}
          width="32px"
          height="32px"
        />
      </div>
      <div className='fz-14 f-bold mb-4'>{total}</div>
      <div className='fz-12 card-curency_vnd'>{totalVnd}</div>
    </div>
  )
}
export default CardCurency
