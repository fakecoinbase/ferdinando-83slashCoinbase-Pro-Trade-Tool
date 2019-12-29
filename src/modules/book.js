export const subToTicker = products => ({type: "subscribe", product_ids: products, channels: ["ticker"]});
export const subToL2Book = products => ({type: "subscribe", product_ids: products, channels: [{name: "level2"}]});
export const subToStatus = () => ({type: "subscribe", channels: [{name: "status"}]});
export const statusReady = () => ({type: "STATUS_READY"});

const bookInitialState = {pairs: "", ready: false};

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
        [action.message.product_id]: action.message.price
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

    default:
      return state;
  }
};