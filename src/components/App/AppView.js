import React from "react";
import Header from "../Header";
import Products from "../Products";
import Pins from "../Pins";
import Arbitrage from "../Arbitrage"
import "./App.css"

const AppView = () => {

  return (
    <div className={"app uk-grid uk-grid-collapse"}>
      <div className={"sidebar uk-width-1-6"}>
        <div className="header uk-section">
          <div className="uk-container uk-padding-remove uk-width-1-1">
            <Header/>
          </div>
        </div>

        <div className="products uk-section uk-overflow-auto scrollbar">
          <div className="uk-container uk-padding-remove uk-width-1-1">
            <Products/>
          </div>
        </div>
      </div>
      <div className={"board uk-width-5-6"}>
        <div className={"pins uk-section uk-overflow-auto scrollbar"}>
          <div className={"uk-container uk-padding-remove uk-width-1-1"}>
            <Pins/>
          </div>
        </div>
        <div className={"arbitrages uk-section"}>
          <div className={"uk-container uk-padding-small uk-width-1-1"}>
            <Arbitrage/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AppView;