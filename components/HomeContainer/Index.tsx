import React from "react";
import Image from 'next/image'
import { useAppSelector } from '@src/app/hooks';
import { getUser, getCurrency, getTotalMoney, getAccountNumber } from '@src/redux/appSlice';
import Router from 'next/router'
import CardATM from "@src/components/Common/CardATM";
import CardCurency from "@src/components/Common/CardCurency";


const HomeContainer: React.FC = () => {
  const username = useAppSelector(getUser);
  const listCurrency = useAppSelector(getCurrency);
  const totalMoney = useAppSelector(getTotalMoney);
  const accountNum = useAppSelector(getAccountNumber);

  return (
    <div className="container home-page">
      <div className="home-page_bg"></div>
      <div style={{ top: "140px" }} className="home-page_bg"></div>
      <div className="flex justify-between mb-20">
        <div className="tag-name flex align-center">
          <div className="tag-name_dot"></div>
          <span className="f-bold fz-12 ml-12">{username}</span>
        </div>
        <Image
          src="/images/User.png"
          className=""
          alt=""
          width="32px"
          height="32px"
        />
      </div>
      <CardATM accountNum={accountNum} total={totalMoney.total} vnd={totalMoney.vnd} />
      <div className="mt-28 mb-40 flex justify-between align-center list-btn">
        <button>
          <Image
            src="/images/Deposit.png"
            className=""
            alt=""
            width="48px"
            height="48px"
          />
          <span className="text-btn opacity-half">Deposit</span>
        </button>
        <button onClick={() => { Router.push('/send') }}>
          <Image
            src="/images/Send.png"
            className=""
            alt=""
            width="48px"
            height="48px"
          />
          <span className="text-btn">Send</span>
        </button>
        <button className=" opacity-half">
          <Image
            src="/images/Swap.png"
            className=""
            alt=""
            width="48px"
            height="48px"
          />
          <span className="text-btn">Swap</span>
        </button>
      </div>
      <div className="mb-12 ml-12 f-bold fz-16">Assets</div>
      {
        listCurrency.length && listCurrency.map((item, index) =>
          <CardCurency key={index} type={item.type} total={item.total} totalVnd={item.vnd} />
        )
      }
    </div>
  )
};
export default HomeContainer;
