import React, { useEffect } from "react";
import Router from 'next/router'
import withAuthenticate from "@src/components/Hocs/withAuthenticate";
import { useAppSelector } from '@src/app/hooks';
import { getLoggedIn } from '@src/redux/appSlice';

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const loggedIn = useAppSelector(getLoggedIn);
  useEffect(() => {
    Router.push(loggedIn ? '/' : '/login')
  }, [loggedIn])

  return <>{children}</>
};

export default withAuthenticate(Layout);
