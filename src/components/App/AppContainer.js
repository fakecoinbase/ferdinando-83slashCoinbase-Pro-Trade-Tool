import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppView from "./AppView";
import {wsConnect} from "../../modules/websocket";
import {statusReady} from "../../modules/book";

function AppContainer() {
  const websocket = useSelector(state => state.websocket);
  const book = useSelector(state => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, [websocket.disconnects]);

  useEffect(() => {
    book.ready && dispatch(statusReady());
  }, [book.ready]);

  return (
    <AppView/>
  )
}

export default AppContainer;