import * as actions from "../modules/book";
import _ from "lodash";

const mwFormatter = store => {

  const filterAction = (store, action) => {
    switch (action.message.type) {
      case "status":
        const products = _.assign({}, ...action.message.products.map(product => {
          return actions.productSchema(product.id, product);
        }));

        store.dispatch(actions.statusReady(products));
        break;

      case "ticker":
        const id = action.message.product_id;
        const data = action.message;

        store.dispatch(actions.productUpdate(id, actions.productSchema(id, data)));
        break;

      default:
        break;
    }
  };

  return next => (action) => {

    switch (action.type) {

      case "ON_MESSAGE":
        filterAction(store, action);
        break;

      default:
        break;
    }

    return next(action);
  }
};

export default mwFormatter;