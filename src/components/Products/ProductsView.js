import React from "react";
import {pinProduct} from "../../modules/book";
import "./Products.css"
import {useDispatch} from "react-redux";

const ProductsView = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={`uk-grid uk-grid-collapse product-font ${props.color}`}>
      <div className={"uk-width-auto"}>
        {props.product}
      </div>
      <div className={"uk-width-expand uk-text-right"}>
        {props.price}
      </div>
      <div id={"product-button-override"} className={"uk-width-auto product-button override"}>
        <button onClick={() => dispatch(pinProduct(props.product))} uk-icon="icon: plus; ratio: .5"/>
      </div>
      <br/>
    </div>
  )
};

export default ProductsView;