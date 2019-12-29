import React from "react";
import Header from "../Header";
import Ticker from "../Ticker"
import Products from "../Products"
import {useSelector} from "react-redux";

function AppView() {
  const book = useSelector(state => state.book);
  let key = 0;

  const keys = Object.entries(book.pairs);
  let products = [];

  keys.sort();

  for (let product of keys) {
    products.push(<Products key={key++} product={product}/>);
  }

  return (
    <div className={"container-fluid p-0"}>
      <div className={"row no-gutters"}>
        <div className={"col-1.5"}>
          <Header/>
          {products}
        </div>
        <div className={"col"}>
          <Ticker/>
        </div>
      </div>
    </div>
  )
}

export default AppView;