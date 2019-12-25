export const updatePrice = price => ({type: "UPDATE_PRICE", price});

const tickerInitialState = {
  price: 0
};

export const tickerReducer = (state = {...tickerInitialState}, action) => {
  switch(action.type) {
    case "UPDATE_PRICE":
      return {...state, price: action.price};
    default:
      return state;
  }
};