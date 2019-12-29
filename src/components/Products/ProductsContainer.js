import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function ProductsContainer(props) {
  const book = useSelector(state => state.book);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#000000");
    setTimeout(() => setColor("#ffffff"), 200);
  }, [props.product[1]]);

  let cardStyle = {
    padding: "2px",
    backgroundColor: color
  };

  const listItemStyle = {
    fontSize: "12px",
    padding: "2px"
  };

  return (
    <div className="card rounded-0" style={cardStyle}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={listItemStyle}>
          <span className={"float-left"}>{props.product[0]}</span>
          <span className={"float-right"}>{props.product[1]}</span>
        </li>
      </ul>
    </div>
  )
}

export default ProductsContainer;