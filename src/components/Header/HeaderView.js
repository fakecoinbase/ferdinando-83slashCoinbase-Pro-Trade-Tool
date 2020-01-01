import React from "react";

const HeaderView = (props) => {
  return (
    <div className="uk-text-center uk-padding-small">
      TRADE TOOL<br/>
      {props.time}<br/>
      {props.date}<br/>
      <hr/>
    </div>
  )
};

export default HeaderView;