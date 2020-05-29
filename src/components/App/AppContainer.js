import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppView from "./AppView";
import {wsConnect} from "../../modules/websocket";

const AppContainer = () => {
  const [websocket, dispatch] = [
    useSelector(state => state.websocket),
    useDispatch()
  ];

  useEffect(() => {
    dispatch(wsConnect());
  }, [dispatch, websocket.disconnects]);

  return (
    <div>
      <AppView/>
    </div>
  )
};

export default AppContainer;