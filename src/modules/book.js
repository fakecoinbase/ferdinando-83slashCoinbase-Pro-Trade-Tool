import {createSelector} from "reselect";

export const subToTicker = products => ({type: "subscribe", product_ids: products, channels: ["ticker"]});
export const subToL2Book = products => ({type: "subscribe", product_ids: products, channels: [{name: "level2"}]});
export const subToStatus = () => ({type: "subscribe", channels: [{name: "status"}]});
export const statusReady = (ids) => ({type: "STATUS_READY", ids});
export const pinProduct = id => ({type: "PIN_PRODUCT", id});
export const unpinProduct = id => ({type: "UNPIN_PRODUCT", id});
export const productUpdate = (id, data) => ({type: "PRODUCT_UPDATE", id, data});

const bookInitialState = {ids: [], products: [], pinsList: ["BTC-USD"], productsList: []};

export const bookReducer = (state = {...bookInitialState}, action) => {
  switch(action.type) {
    case "PRODUCT_UPDATE":
      return {
        ...state,
        products: {...state.products, [action.id]: action.data}
      };

    case "STATUS_READY":
      return {
        ...state,
        ids: action.ids,
        ready: true,
        productsList: [...action.ids.filter(id => !state.pinsList.includes(id))]
      };

    case "PIN_PRODUCT":
      return {
        ...state,
        pinsList: [...state.pinsList, action.id],
        productsList: [...state.productsList.filter(id => id !== action.id)]
      };

    case "UNPIN_PRODUCT":
      return {
        ...state,
        pinsList: [...state.pinsList.filter(id => id !== action.id)],
        productsList: [...state.productsList, action.id]
      };

    default:
      return state;
  }
};

const selectBook = state => state.book;

export const selectIds = createSelector(
  selectBook,
  book => {
    return book.ids;
  }
);

export const selectProducts = createSelector(
  selectBook,
  book => {
    let products = [];
    for (let product of book.productsList) {
      book.products[product] && products.push([product, book.products[product].data]);
    }

    return products.sort();
  }
);

export const selectPins = createSelector(
  selectBook,
  book => {
    let pins = [];
    for (let pin of book.pinsList) {
      book.products[pin] && pins.push([pin, book.products[pin].data]);
    }

    return pins.sort();
  }
);