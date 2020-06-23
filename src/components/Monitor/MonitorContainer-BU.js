import React, {useEffect} from "react";
import {useState} from "react"
import MonitorView from "./MonitorView"
import {useSelector, shallowEqual} from "react-redux";
import {selectMonitors} from "../../modules/book";

const MonitorContainer = () => {
  const link = useSelector(selectMonitors, shallowEqual);
  const [portfolio, setPortfolio] = useState({
    nextBuy: 0,
    tier: 1,
    usdSpent: 0,
    usdEarned: 0,
    usdNet: 0,
    coinOwned: 0,
    breakPrice: 0,
    sellPrice: 0
  });
  const [price, setPrice] = useState(0);

  const sellAlgo = () => {
    const sellPrice = portfolio.breakPrice * 1.01;
    const usdEarned = portfolio.usdEarned + sellPrice * portfolio.coinOwned;

    if (link.data.price >= sellPrice) {
      setPortfolio({
        ...portfolio,
        nextBuy: sellPrice,
        tier: 1,
        usdSpent: 0,
        usdEarned: 0,
        usdNet: Number(usdEarned - portfolio.usdSpent),
        coinOwned: 0,
        breakPrice: 0,
        sellPrice: 0
      });
    }
  };

  const buyAlgo = () => {
    //** Money to Spend Option **//
    // const nextBuy = portfolio.nextBuy * .999;
    // const tier = portfolio.tier * 2;
    // const usdSpent = portfolio.usdSpent + portfolio.tier;
    // const ethOwned = portfolio.ethOwned + ((portfolio.tier * .995) / portfolio.nextBuy);
    // const breakPrice = portfolio.tier / (((portfolio.tier * .995) / portfolio.nextBuy) * .995);

    //** Coin to Spend Option **//
    const nextBuy = (portfolio.nextBuy * .995) * .995; //default *.995) * .995;
    const tier = portfolio.tier * 2;
    const usdSpent = portfolio.usdSpent + ((portfolio.tier * 1.005) * portfolio.nextBuy); //default * 1.005
    const coinOwned = portfolio.coinOwned + portfolio.tier;
    const breakPrice = (usdSpent * 1.005) / coinOwned; //default * 1.005
    const sellPrice = breakPrice * 1.01; //default * 1.01
    const priceLength = link.data.quote_increment.length - 2;

    if (link.data.price <= portfolio.nextBuy) {
      setPortfolio({
        ...portfolio,
        nextBuy: Number(nextBuy.toFixed(priceLength)),
        tier: Number(tier),
        usdSpent: Number(usdSpent.toFixed(priceLength)),
        coinOwned: Number(coinOwned.toFixed(priceLength)),
        breakPrice: Number(breakPrice.toFixed(priceLength)),
        sellPrice: Number(sellPrice.toFixed(priceLength))
      });
    }

    portfolio.breakPrice && sellAlgo();
  };

  useEffect(() => {
    (price === 0) && link && link.data && link.data.price && setPrice(Number(link.data.price));

    price && !portfolio.nextBuy && setPortfolio({...portfolio, nextBuy: price});
    portfolio.nextBuy && buyAlgo();
  }, [link, portfolio]);

  useEffect(() => {
    console.log(portfolio);
  }, [portfolio.nextBuy]);

  return (
    <div>
      <MonitorView portfolio={portfolio}/>
    </div>
  )
};

export default MonitorContainer;