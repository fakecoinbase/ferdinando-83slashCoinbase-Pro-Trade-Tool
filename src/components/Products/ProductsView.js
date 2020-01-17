import React, {useEffect, useState} from "react";
import {usePrevious} from "../../utilities/hooks";
import "./Products.css"

const ProductsView = (props) => {
  const [color, setColor] = useState("product-default");

  const previousPrice = usePrevious(props.data.price);

  useEffect(() => {
    if (props.data.price > previousPrice)
      setColor("product-increase");

    if (props.data.price < previousPrice)
      setColor("product-decrease");

    setTimeout(() => setColor("product-default"), 2000);
  }, [previousPrice]);

  return (
    <div className={`uk-grid uk-grid-collapse product-font ${color}`}>
      <div className={"uk-width-auto"}>
        {props.product}
      </div>
      <div className={"uk-width-expand uk-text-right"}>
        {props.data.price}
      </div>
      <div id={"product-button-override"} className={"uk-width-auto product-button override"}>
        <button onClick={() => props.pinItem(props.product)} uk-icon="icon: plus; ratio: .5"/>
      </div>
      <br/>
    </div>
  )
};

export default ProductsView;