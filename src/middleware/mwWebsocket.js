import * as actions from "../modules/websocket";
import {subToStatus, subToTicker} from "../modules/book";
import {w3cwebsocket as Websocket} from "websocket";

const host = "wss://ws-feed.pro.coinbase.com";

const mwWebsocket = store => {
  let client = null;

  const onOpen = store => () => {
    store.dispatch(actions.wsConnected());
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (message) => {
    store.dispatch(actions.onMessage(JSON.parse(message.data)));
  };

  return next => (action) => {
    switch (action.type) {
      case "WS_CONNECT":
        if (client !== null) {
          client.close();
        }

        client = new Websocket(host);

        client.onopen = onOpen(store);
        client.onclose = onClose(store);
        client.onmessage = onMessage(store);
        break;

      case "WS_CONNECTED":
        client.send(JSON.stringify(subToStatus()));
        break;

      case "WS_DISCONNECT":
        if (client !== null) {
          client.close();
        }
        client = null;
        break;

      case "STATUS_READY":
        client.send(JSON.stringify(subToTicker(action.ids)));
        break;

      default:
        break;
    }

    return next(action);
  }
};

export default mwWebsocket;