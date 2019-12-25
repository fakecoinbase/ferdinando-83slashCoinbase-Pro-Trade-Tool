import React from "react";
import Trades from "../Trades/TradesContainer"

function AppView() {
  //useWebsocket();

  return (
    <div>
      <header>Header</header>
      <Trades/>
    </div>
  )
}

export default AppView;