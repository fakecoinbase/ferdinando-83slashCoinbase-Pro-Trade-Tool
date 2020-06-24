import React from "react";
import "./Monitor.css"

const MonitorView = (props) => {
  return (
    <div className={"monitor-default scrollbar"}>
      <table className="uk-table uk-table-divider">
        <thead>
        <tr>
          <th>Product</th>
          <th>USD Spent</th>
          <th>USD Earned</th>
          <th>USD Net</th>
          <th>Coin Owned</th>
          <th>Next Purchase Tier</th>
          <th>Next Buy Price</th>
          <th>Break Even Sell Price</th>
          <th>Sell Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          {/*<td>XRP</td>*/}
          {/*<td>{props.portfolio.usdSpent}</td>*/}
          {/*<td>{props.portfolio.usdEarned}</td>*/}
          {/*<td>{props.portfolio.usdNet}</td>*/}
          {/*<td>{props.portfolio.coinOwned}</td>*/}
          {/*<td>{props.portfolio.tier}</td>*/}
          {/*<td>{props.portfolio.nextBuy}</td>*/}
          {/*<td>{props.portfolio.breakPrice}</td>*/}
          {/*<td>{props.portfolio.sellPrice}</td>*/}
        </tr>
        {/*<tr>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*  <td>Table Data</td>*/}
        {/*</tr>*/}
        </tbody>
      </table>
    </div>
  )
};

export default MonitorView;