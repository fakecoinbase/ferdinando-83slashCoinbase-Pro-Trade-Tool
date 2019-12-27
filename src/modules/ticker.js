export const updatePrice = price => ({type: "UPDATE_PRICE", price});
export const subToTicker = product => ({type: "subscribe", product_ids: [product], channels: ["ticker"]});
export const subToStatus = () => ({type: "subscribe", channels: [{name: "status"}]});
export const updateProducts = products => ({type: "UPDATE_PRODUCTS", products});

const tickerInitialState = {
  price: 0,
  products: []
};

export const tickerReducer = (state = {...tickerInitialState}, action) => {
  switch(action.type) {
    case "UPDATE_PRICE":
      return {...state, price: action.price};

    case "UPDATE_PRODUCTS":
      console.log(action.products);
      return {...state, products: action.products};
    default:
      return state;
  }
};