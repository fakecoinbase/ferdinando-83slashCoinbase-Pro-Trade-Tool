import React, {useState, useEffect, useCallback} from "react";
import HeaderView from "./HeaderView";

const HeaderContainer = () => {
  const [today, setToday] = useState(new Date());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const getUpdate = () => setTimeout(() => setToday(new Date()), 1000);

  const updateNow = useCallback(() => {
    const [month, day, year, hour, minute, second, period] = [
      today.toLocaleString("default", {month: "short"}),
      today.getDate(),
      today.getFullYear(),
      today.getHours() % 12 ? (today.getHours() % 12).toLocaleString("default", {minimumIntegerDigits: 2}) : 12,
      today.getMinutes().toLocaleString("default", {minimumIntegerDigits: 2}),
      today.getSeconds().toLocaleString("default", {minimumIntegerDigits: 2}),
      today.getHours() < 12 ? "AM" : "PM"
    ];

    setDate(month + " " + day + " " + year);
    setTime(hour + ":" + minute + ":" + second + " " + period);
  }, [today]);

  useEffect(() => {
    getUpdate();
    updateNow();
  }, [updateNow]);

  return (
    <div>
      <HeaderView date={date} time={time}/>
    </div>
  )
};

export default HeaderContainer;