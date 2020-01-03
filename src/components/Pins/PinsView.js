import React from "react";
import {unpinProduct} from "../../modules/book";
import "./Pins.css"
import {useDispatch} from "react-redux";

const PinsView = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={"pin uk-card"}>
      <div className={"uk-card-header"}>
        <div className={"uk-card-title uk-text-center"}>
          {props.product}
        </div>
      </div>
      <div className={"uk-card-body uk-text-left"}>
        Price:<span className={"uk-float-right"}>{props.data.price}</span><br/>
        Side:<span className={"uk-float-right"}>{props.data.side}</span><br/>
        Size:<span className={"uk-float-right"}>{props.data.size}</span><br/>
        Best Bid:<span className={"uk-float-right"}>{props.data.best_bid}</span><br/>
        Best Ask:<span className={"uk-float-right"}>{props.data.best_ask}</span><br/>
      </div>
      <div className={"uk-card-footer"}>
        <button onClick={() => dispatch(unpinProduct(props.product))} uk-icon="icon: minus; ratio: .5"/>
      </div>
    </div>
  )
};

export default PinsView;