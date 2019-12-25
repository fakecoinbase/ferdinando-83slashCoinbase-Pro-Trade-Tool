import * as actions from "../modules/websocket";
import {updatePrice} from "../modules/ticker";
import {w3cwebsocket as Websocket} from "websocket";

const mwWebsocket = () => {
  let client = null;

  const onOpen = dispatch => (message) => {
    client.send(JSON.stringify({
      "type": "subscribe",
      "product_ids": [
        "BTC-USD"
      ],
      "channels": ["ticker"]
    }));
    dispatch(actions.wsConnected(message.target.url));
  };

  const onClose = dispatch => () => {
    dispatch(actions.wsDisconnected());
  };

  const onMessage = dispatch => (message) => {
    const payload = (JSON.parse(message.data));

    switch(payload.type) {
      case "ticker":
        dispatch(updatePrice(parseFloat(payload.price).toFixed(2)));
        break;

      default:
        console.log(payload);
    }
  };

  return next => (action) => {
    switch(action.type) {
      case "WS_CONNECT":
        if(client !== null) {
          client.close();
        }

        client = new Websocket(action.host);

        client.onopen = onOpen(next);
        client.onclose = onClose(next);
        client.onmessage = onMessage(next);
        break;

      case "WS_DISCONNECT":
        if(client !== null) {
          client.close();
        }
        client = null;
        break;

      //case "SUBSCRIBE": // do subscription stuff

      default:
        return next(action);
    }
  };
};

export default mwWebsocket;