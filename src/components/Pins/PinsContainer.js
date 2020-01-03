import React from "react";
import PinsView from "./PinsView";

const PinsContainer = (props) => {
  return (
    <div>
      <PinsView product={props.product} data={props.data}/>
    </div>
  )
};

export default PinsContainer;