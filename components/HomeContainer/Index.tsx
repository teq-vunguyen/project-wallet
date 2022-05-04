import React from "react";
import Image from 'next/image'
import { useAppSelector } from '@src/app/hooks';
import { getUser } from '@src/redux/appSlice';

const HomeContainer: React.FC = () => {
  const username = useAppSelector(getUser);

  return (
    <div className="container home-page">
      <div className="home-page_bg"></div>
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
      <div className="card-atm"></div>
    </div>
  )
};
export default HomeContainer;
