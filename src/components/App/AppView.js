import React from "react";
import Header from "../Header";
import Products from "../Products"
import "./App.css"

const AppView = (props) => {
  let key = 0;
  const pairList = [];

  for (let pair of props.pairs) {
    pairList.push(<Products key={key++} product={pair.product} price={pair.price}/>);
  }

  return (
      <div className={"app uk-grid uk-grid-collapse"}>
        <div className={"uk-width-1-6 sidebar"}>
          <Header/>
          {pairList}
        </div>
        <div className={"uk-padding-small"}>
          Pins coming soon...
        </div>
      </div>
  )
};

export default AppView;