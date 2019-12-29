import React from "react";

const HeaderContainer = () => {
  const currentDate = new Date();
  const currentTime = currentDate.getHours() % 12 + ":" + currentDate.getMinutes() +
    " " + (currentDate.getHours() > 12 ? "PM" : "AM");

  return (
    <div className="card rounded-0">
      <img src="" className="card-img-top" alt=""/>
        <div className="card-body">
          <p className="card-text">
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>TRADE TOOL</span> <br/>
            <span style={{fontSize: "22px"}}>{currentTime.toString()}</span> <br/>
            {currentDate.toLocaleString("default", {month: "short"}) + " " + currentDate.getDate() + ", " + currentDate.getFullYear()}
          </p>
        </div>
    </div>
  )
};

export default HeaderContainer;