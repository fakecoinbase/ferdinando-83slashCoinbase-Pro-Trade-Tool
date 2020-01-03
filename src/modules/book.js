export const subToTicker = products => ({type: "subscribe", product_ids: products, channels: ["ticker"]});
export const subToL2Book = products => ({type: "subscribe", product_ids: products, channels: [{name: "level2"}]});
export const subToStatus = () => ({type: "subscribe", channels: [{name: "status"}]});
export const statusReady = () => ({type: "STATUS_READY"});
export const pinProduct = product => ({type: "PIN_PRODUCT", product});
export const unpinProduct = product => ({type: "UNPIN_PRODUCT", product});

const bookInitialState = {pairs: "", pins: [], ready: false};

const filterAction = (state, action) => {
  switch(action.message.type) {
    case "status":
      const ids = action.message.products.map(product => product.id);
      const products = {};

      for (let id of ids) {
        products[id] = state.pairs[id];
      }

      const pairs = {
        pairs: products
      };


      return {...state, ...pairs, ready: true};

    case "ticker":
      return {...state, pairs: {...state.pairs,
          [action.message.product_id]: {
            price: action.message.price,
            side: action.message.side,
            size: action.message.last_size,
            best_bid: action.message.best_bid,
            best_ask: action.message.best_ask
          }
        }
      };

    default:
      return state;
  }
};

export const bookReducer = (state = {...bookInitialState}, action) => {
  switch(action.type) {
    case "ON_MESSAGE":
      return filterAction(state, action);

    case "PIN_PRODUCT":
      return {...state, pins: [...state.pins, action.product]};

    case "UNPIN_PRODUCT":
      console.log(action.product);
      return {...state, pins: [...state.pins.filter(product => product !== action.product)]};

    default:
      return state;
  }
};