import React from "react";
import ButtonPrimary from "@src/components/Common/ButtonPrimary";

interface Props {
  nameCurr: string
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}
const SuccessModal: React.FC<Props> = (props) => {
  const { handleClick, nameCurr } = props

  return <div className="overlay-modal">
    <div className="content-modal">
      <div className="text-center fz-20 mb-24 f-bold">Successfully sent</div>
      <div className="mb-24 fz-14">Your <b>{nameCurr || ''}</b> has been sent! <br />
        Thank you for using our service</div>
      <ButtonPrimary text="OK" isActive onClick={handleClick} />
    </div>
  </div>
}
export default SuccessModal