import React from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {unpinProduct, selectPins} from "../../modules/book"
import PinsView from "./PinsView";

const PinsContainer = () => {
  const pinsList = useSelector(selectPins, shallowEqual);
  const dispatch = useDispatch();
  const viewList = [];

  const unpinItem = (product) => {
    dispatch(unpinProduct(product));
  };

  pinsList.forEach(([key, data]) => viewList.push(<PinsView key={key} product={key} data={data} unpinItem={unpinItem}/>));

  return (
    <div className={"uk-grid-small uk-child-width-1-5 uk-padding-small"} data-uk-grid={"masonry: true"}>
      {viewList}
    </div>
  )
};

export default PinsContainer;