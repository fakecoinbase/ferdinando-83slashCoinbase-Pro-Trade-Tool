import {useState, useEffect} from "react";
import {w3cwebsocket as Websocket} from "websocket";

function useWebsocket(url) {
  const client = new Websocket(url);

  useEffect(() => {
    client.onopen = () => {
      client.send(JSON.stringify({
        "type": "subscribe",
        "product_ids": [
          "BTC-USD"
        ],
        "channels": ["ticker"]
      }))
    };

    client.onmessage = (message) => {
      console.log("useWebsocket called", message);
    };

    client.onclose = (message) => {
      console.log("Websocket closed with message:", {message});
    };

    client.onerror = (error) => {
      console.log(error);
    };
  }, []);

  return client;
}

export {useWebsocket};