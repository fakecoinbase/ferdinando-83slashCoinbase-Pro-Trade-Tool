import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import AppView from "./AppView";
import {wsConnect} from "../../modules/websocket";

function AppContainer() {
  const host = "wss://ws-feed.pro.coinbase.com";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect(host));
  }, []);

  return (
    <AppView/>
  )
}

export default AppContainer;