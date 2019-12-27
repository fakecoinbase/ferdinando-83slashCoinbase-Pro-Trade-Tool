import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppView from "./AppView";
import {wsConnect} from "../../modules/websocket";

function AppContainer() {
  const websocket = useSelector(state => state.websocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, [websocket.disconnects]);

  return (
    <AppView/>
  )
}

export default AppContainer;