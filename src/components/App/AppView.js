import React from "react";
import Header from "../Header";
import Products from "../Products";
import Pins from "../Pins";
import Monitor from "../Monitor"
import "./App.css"

const AppView = () => {

  return (
    <div className={"app"}>
      <div className={"sidebar col"}>
        <div className="header row">
          <div className="uk-container uk-padding-remove uk-width-1-1">
            <Header/>
          </div>
        </div>

        <div className="products row scroll-y scrollbar">
          <div className="uk-container uk-padding-remove uk-width-1-1">
            <Products/>
          </div>
        </div>
      </div>
      <div className={"board col"}>
        <div className={"pins row scroll-y scrollbar"}>
          <Pins/>
        </div>
        <div className={"monitors row"}>
          <Monitor/>
        </div>
      </div>
    </div>
  )
};

export default AppView;