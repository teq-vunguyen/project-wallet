import React, { useState, useEffect } from "react";
import ButtonPrimary from "@src/components/Common/ButtonPrimary";
import NavBar from "@src/components/Common/NavBar";
import ModalSuccess from "@src/components/Modal/Success";
import Router from 'next/router'
import ModalInformation from "@src/components/Modal/Information";
import Image from 'next/image'
import { useAppSelector } from '@src/app/hooks';
import { getCurrency, getTotalMoney } from '@src/redux/appSlice';


const SendContainer: React.FC = () => {
  const listCurrency = useAppSelector(getCurrency);
  const totalMoney = useAppSelector(getTotalMoney);

  const [openSend, setOpenSend] = useState(false)
  const [openAsset, setOpenAsset] = useState(false)
  const [idCurrency, setIdCurrency] = useState<any>(null)

  useEffect(() => {
    if (listCurrency && listCurrency.length) {
      const { type } = listCurrency[0]
      setIdCurrency(type)
    }
  }, [listCurrency])

  const handleChooseCurrency = (type: string) => {
    setIdCurrency(type)
    setTimeout(() => {
      setOpenAsset(false)
    }, 200);
  }

  const getMaxCurrency = (type: string) => {
    if (type === 'Total') return totalMoney.total
    const find = listCurrency.find(i => i.type === type)
    if (find && find.type) return find.total
    return ''
  }

  return (
    <div className="container send-page">
      <NavBar />
      <div className="fz-10 f-bold ml-8 mb-4 color-sub">FROM</div>
      <input disabled value={"My Wallet  (7300...3334)"} />
      <div className="fz-10 f-bold ml-8 mb-4 mt-16 color-sub">TO</div>
      <input />
      <div className="fz-10 f-bold ml-8 mb-4 mt-16 color-sub">ASSET</div>
      <button className="open-asset" onClick={() => { setOpenAsset(true) }}>
        <div className="absolute money-icon">
          <Image
            src={"/images/" + idCurrency + ".png"}
            width="32px"
            height="32px"
          />
        </div>
        <div className="absolute name">{idCurrency}</div>
        <div className="absolute layer">
          <Image
            src="/images/Layers.png"
            className=""
            alt=""
            width="24px"
            height="24px"
          />
        </div>
      </button>
      <div className="flex  mb-4 mt-16 align-center justify-between">
        <div className="fz-10 f-bold  ml-8  color-sub">Amount</div>
        <div className="fz-10 f-bold">AVAILABLE: {getMaxCurrency(idCurrency)}</div>
      </div>
      <div className="relative">
        <input type="number" />
        <button className="btn-max">MAX</button>
      </div>
      <div className="flex align-center justify-between btn-bottom">
        <ButtonPrimary text="Cancel" onClick={() => Router.back()} />
        <ButtonPrimary text="Send" isActive onClick={() => { setOpenSend(true) }} />
      </div>
      {openAsset && <ModalInformation handleClose={() => { setOpenAsset(false) }} handleChoose={(type: string) => handleChooseCurrency(type)} />}
      {openSend && <ModalSuccess nameCurr={idCurrency} handleClick={() => { setOpenSend(false) }} />}
    </div>
  )
};
export default SendContainer;
