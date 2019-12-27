import React from "react";
import {useSelector} from "react-redux";

function TradesContainer() {
  const websocket = useSelector(state => state.websocket);

  return (
    <div>
      <h1>{websocket.message.price}</h1>
    </div>
  )
}

export default TradesContainer;