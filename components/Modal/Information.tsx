import React from "react";
import Image from 'next/image'

interface Props {
  handleClose: any
}
const SuccessModal: React.FC<Props> = (props) => {
  const { handleClose } = props
  return <div className="overlay-modal">
    <div className="infor-modal">
      <div className="infor-modal_close" onClick={handleClose}>
        <Image
          src="/images/Close.png"
          className=""
          alt=""
          width="32px"
          height="32px"
        />
      </div>
      <div className="infor-modal_line f-bold fz-14">Assets</div>
    </div>
  </div>
}
export default SuccessModal