import React from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {pinProduct, selectIds, selectProducts} from "../../modules/book";
import ProductsView from "./ProductsView";

function ProductsContainer() {
  const productsList = useSelector(selectProducts, shallowEqual);
  const idsList = useSelector(selectIds);
  const dispatch = useDispatch();
  const viewList = [];

  const pinItem = (product) => {
    if ((idsList.length - productsList.length) < 5) {
      dispatch(pinProduct(product));
    }
    else {
      console.log("Max Pins Reached");
    }
  };

  productsList.forEach(([key, data]) => viewList.push(<ProductsView key={key} product={key} data={data} pinItem={pinItem}/>));

  return (
    <div>
      {viewList}
    </div>
  )
}

export default ProductsContainer;