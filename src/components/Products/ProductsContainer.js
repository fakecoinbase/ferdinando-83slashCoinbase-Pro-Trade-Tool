import React, {useEffect, useState, useRef} from "react";
import ProductsView from "./ProductsView";

function ProductsContainer(props) {
  const [color, setColor] = useState("product-default");

  const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  };

  const previousPrice = usePrevious(props.price);

  useEffect(() => {
    if (props.price > previousPrice)
      setColor("product-increase");

    if (props.price < previousPrice)
      setColor("product-decrease");

    setTimeout(() => setColor("product-default"), 2000);
  }, [props.price]);

  return (
    <div>
      <ProductsView product={props.product} price={props.price} color={color}/>
    </div>
  )

}

export default ProductsContainer;