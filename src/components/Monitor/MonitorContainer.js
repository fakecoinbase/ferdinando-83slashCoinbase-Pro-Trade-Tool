import React, {useEffect} from "react";
import {useState} from "react"
import MonitorView from "./MonitorView"
import {useSelector, shallowEqual} from "react-redux";
import {selectMonitors} from "../../modules/book";
import _ from "lodash";

const MonitorContainer = () => {
  const monitors = useSelector(selectMonitors, shallowEqual);
  const [portfolios, setPortfolios] = useState([]);

  //console.log(portfolios);

  useEffect(() => {
    if(monitors.length > 0) {
      setPortfolios(monitors.forEach(monitor => {
        console.log(monitor.data.portfolio);
        return monitor.data.portfolio;
      }));
    }
  }, [monitors]);

  //console.log(portfolios);

  return (
    <div>
      <MonitorView/>
    </div>
  )
};

export default MonitorContainer;