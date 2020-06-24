import {createSelector} from "reselect";
import _ from "lodash";

export const subToTicker = products => ({type: "subscribe", product_ids: products, channels: ["ticker"]});
export const subToL2Book = products => ({type: "subscribe", product_ids: products, channels: [{name: "level2"}]});
export const subToStatus = () => ({type: "subscribe", channels: [{name: "status"}]});
export const statusReady = products => ({type: "STATUS_READY", products});
export const productUpdate = (id, product) => ({type: "PRODUCT_UPDATE", id, product});
export const portfolioUpdate = product => ({type: "PORTFOLIO_UPDATE", product});
export const pinProduct = id => ({type: "PIN_PRODUCT", id});
export const unpinProduct = id => ({type: "UNPIN_PRODUCT", id});

export const productSchema = (id, data) => ({[id]: {data: data}});
export const portfolioSchema = (id, data) => ({[id]: {data: {portfolio: data}}});

const bookInitialState = {ids: [], products: [], pinsList: ["BTC-USD"], productsList: []};

export const bookReducer = (state = {...bookInitialState}, action) => {
  switch(action.type) {
    case "STATUS_READY":
      return {
        ...state,
        ids: _.keys(action.products),
        ready: true,
        productsList: [..._.keys(action.products).filter(id => !state.pinsList.includes(id))],
        products: _.merge({}, state.products, action.products)
      };

    case "PRODUCT_UPDATE":
      //console.log(state.products);
      return {
        ...state,
        products: _.merge({}, state.products, action.product)
      };

    case "PORTFOLIO_UPDATE":
      return {
        ...state,
        products: _.merge({}, state.products, action.product)
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

export const selectMonitors = createSelector(
  selectBook,
  book => {
    let monitors = [];
    for (let monitor of ["XRP-BTC"]) {
      book.products[monitor] && monitors.push(book.products[monitor]);
    }

    return monitors;
  }
);
