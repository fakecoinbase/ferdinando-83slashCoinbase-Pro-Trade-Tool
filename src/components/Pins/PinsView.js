import React, {useEffect, useState} from "react";
import {usePrevious} from "../../utilities/hooks";
import image from "../../images/bitcoin_image.jpg";
import "./Pins.css"

const PinsView = (props) => {
  const [color, setColor] = useState("pin-default");

  const previousPrice = usePrevious(props.data.price);

  useEffect(() => {
    if (props.data.price > previousPrice)
      setColor("pin-increase");

    if (props.data.price < previousPrice)
      setColor("pin-decrease");

    setTimeout(() => setColor("pin-default"), 2000); //Cant perform state update on unmounted
  }, [previousPrice]);

  return (
    <div>
      <div className={"pin uk-card uk-animation-slide-top"}>
        <div className={"uk-container uk-padding-remove"}>
          <div className={"uk-card-header uk-background-cover uk-blend-screen"} data-src={image} data-uk-img={""}>
            <div className={`uk-card-title uk-text-center`}>
              {props.product}
            </div>
          </div>
          <div className={`uk-card-body uk-text-left ${color}`}>
            Price:<span className={"uk-float-right"}>{props.data.price}</span><br/>
            Side:<span className={"uk-float-right"}>{props.data.side}</span><br/>
            Size:<span className={"uk-float-right"}>{props.data.last_size}</span><br/>
            Best Bid:<span className={"uk-float-right"}>{props.data.best_bid}</span><br/>
            Best Ask:<span className={"uk-float-right"}>{props.data.best_ask}</span><br/>
            <button onClick={() => props.unpinItem(props.product)} uk-icon="icon: minus; ratio: .5"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PinsView;