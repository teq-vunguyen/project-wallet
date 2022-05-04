import React from "react";
import Image from 'next/image'
import { useAppSelector } from '@src/app/hooks';
import { getTotalMoney, getCurrency } from '@src/redux/appSlice';

interface Props {
  handleClose: any
  handleChoose: any
}
interface PropsItem {
  index?: number
  type: string
  total: string
  vnd: string
  click: any
}
const AssetsModal: React.FC<Props> = (props) => {
  const { handleClose, handleChoose } = props
  const totalMoney = useAppSelector(getTotalMoney)
  const listCurrency = useAppSelector(getCurrency);

  const clickItem = (type: any) => {
    handleChoose(type)
  }

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
      <ItemCurrency type={totalMoney.type} total={totalMoney.total} vnd={totalMoney.vnd} click={() => clickItem(totalMoney.type)} />
      {
        listCurrency && listCurrency.map((item, index) =>
          <ItemCurrency key={index} type={item.type} total={item.total} vnd={item.vnd} click={() => clickItem(item.type)} />)
      }
    </div>
  </div>
}
const ItemCurrency: React.FC<PropsItem> = (props) => {
  const { type, total, vnd, click } = props
  return <div className="mt-8 mb-8 relative item-c" onClick={click}>
    <div className="item-c_img">
      <Image
        src={"/images/" + type + ".png"}
        width="32px"
        height="32px"
      />
    </div>
    <div className="fz-14 f-bold">{total}</div>
    <div className="fz-12 mt-4 color-sub">{vnd}</div>
  </div>
}
export default AssetsModal