import React from "react";
import "./Products.css"

const ProductsView = (props) => {
  return (
    <div className={`uk-grid uk-grid-collapse product-font ${props.color}`}>
      <div className={"uk-width-auto"}>
        {props.product}
      </div>
      <div className={"uk-width-expand uk-text-right"}>
        {props.price}
      </div>
      <div id={"product-button-override"} className={"uk-width-auto product-button override"}>
        <a onClick={""} uk-icon="icon: plus; ratio: .5"/>
      </div>
      <br/>
    </div>
  )
};

export default ProductsView;