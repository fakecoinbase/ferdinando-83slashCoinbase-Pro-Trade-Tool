import * as actions from "../modules/book"

const mwFormatter = store => {

  const filterAction = (store, action) => {
    switch (action.message.type) {
      case "status":
        const ids = action.message.products.map(product => product.id);

        store.dispatch(actions.statusReady(ids));
        break;

      case "ticker":
        const product_data = {
          data:
            {
              price: action.message.price,
              side: action.message.side,
              size: action.message.last_size,
              best_bid: action.message.best_bid,
              best_ask: action.message.best_ask
            }
        };

        store.dispatch(actions.productUpdate(action.message.product_id, product_data));
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