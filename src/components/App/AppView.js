import React from "react";
import Header from "../Header";
import Products from "../Products";
import Pins from "../Pins";
import "./App.css"

const AppView = (props) => {
  let key = 0;
  const pairList = [];
  const pinsList = [];

  for (let pair of props.pairs) {
    pair.data && pairList.push(<Products key={key++} product={pair.product} price={pair.data.price}/>);
  }

  for (let pin of props.pins) {
    pin.data && pinsList.push(<Pins key={key++} product={pin.product} data={pin.data}/>);
  }

  return (
      <div className={"app uk-grid uk-grid-collapse"}>
        <div className={"sidebar uk-width-1-6"}>
          <Header/>
          {pairList}
        </div>
        <div className={"pins uk-width-5-6"}>
          <div className={"uk-grid-small uk-child-width-1-5 uk-padding-small"} data-uk-grid={"masonry: true"}>
            {pinsList}
          </div>
        </div>
      </div>
  )
};

export default AppView;