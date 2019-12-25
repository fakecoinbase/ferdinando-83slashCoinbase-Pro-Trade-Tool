import React from "react";
import {useSelector} from "react-redux";

function TradesContainer() {
  const trades = useSelector(state => state.ticker);

  return (
    <div>
      <h1>{trades.price}</h1>
      <button type={"button"} onClick={"initWebsocket"}>Initiate Websocket</button>
      <button type={"button"} onClick={"endWebsocket"}>End Websocket</button>
    </div>
  )
}

export default TradesContainer;