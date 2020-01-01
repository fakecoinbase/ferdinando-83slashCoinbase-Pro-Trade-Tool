import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppView from "./AppView";
import {wsConnect} from "../../modules/websocket";
import {statusReady} from "../../modules/book";
import Products from "../Products";

function AppContainer() {
  const websocket = useSelector(state => state.websocket);
  const book = useSelector(state => state.book);
  const dispatch = useDispatch();

  const keys = Object.entries(book.pairs);
  const omit = ["ALGO-USD"]; //to be replaced with array of pinned cards
  const filteredKeys = keys.filter(([key]) => !omit.includes(key));
  filteredKeys.sort();
  const pairs = filteredKeys.map(([key, value]) => ({product: key, price: value}));

  useEffect(() => {
    dispatch(wsConnect());
  }, [websocket.disconnects]);

  useEffect(() => {
    book.ready && dispatch(statusReady());
  }, [book.ready]);

  return (
    <AppView pairs={pairs}/>
  )
}

export default AppContainer;