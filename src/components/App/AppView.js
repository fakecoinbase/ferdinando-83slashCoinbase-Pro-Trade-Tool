import React, {useState, useEffect} from "react";
import {useWebsocket} from "../../utilities/useWebsocket";

function AppView() {
  const [price, setPrice] = useState("");

  const websocket = useWebsocket("wss://ws-feed.pro.coinbase.com");

  useEffect(() => {
    websocket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setPrice(data.price);
    }
  }, []);

  return (
    <header>{price}</header>
  )
}

export default AppView;