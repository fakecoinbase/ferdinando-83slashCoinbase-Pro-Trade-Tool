import * as actions from "../modules/book";
import _ from "lodash";

const mwAlgorithm = store => {

  const processProduct = (store, action) => {
    const prevData = store.getState().book.products[action.id].data.portfolio;
    const newData = {};

    if (!prevData) {
      _.assign(newData, {
        portfolio:
          {
            nextBuy: 0,
            tier: 1,
            usdSpent: 0,
            usdEarned: 0,
            usdNet: 0,
            coinOwned: 0,
            breakPrice: 0,
            sellPrice: 0
          }
      });
    }
    else {
      _.assign(newData, {
        portfolio:
          {
            nextBuy: 0,
            tier: prevData.tier + 1,
            usdSpent: 0,
            usdEarned: 0,
            usdNet: 0,
            coinOwned: 0,
            breakPrice: 0,
            sellPrice: 0
          }
      });
    }

    //console.log(newData);

    store.dispatch(actions.portfolioUpdate(actions.productSchema(action.id, newData)));
  };

  return next => (action) => {

    switch (action.type) {
      case "STATUS_READY":
        break;

      case "PRODUCT_UPDATE":
        //console.log(store.getState().book.products[action.id]);
        processProduct(store, action);
        break;

      default:
        break;
    }

    return next(action);
  }
};

export default mwAlgorithm;