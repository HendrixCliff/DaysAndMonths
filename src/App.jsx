import "./styles.css";
import { useState } from "react";
import useDate from "./useDate";

export default function App() {
  const [addDays, setAddDays] = useState(0);
  const { date, getDay, getMonth, addDay, addMonth } = useDate();
  const [statuteTitle, setStatuteTitle] = useState("Current Date:");
  const [addMonths, setAddMonths] = useState(0);
  const [newdate, setNewdate] = useState(date.toString());

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "day") {
      setAddDays(parseInt(value));
    } else if (name === "month") {
      setAddMonths(parseInt(value));
    }
  };

  const daysTimesPlusMonths = () => {
    const newDate = addMonth(addMonths, addDay(addDays, date));
    return newDate;
  };

  return (
    <div>
      <h2>{statuteTitle}</h2>
      <br />
      Date: {newdate}
      <br />
      Day: {getDay()}
      <br />
      Month: {getMonth()}
      <br />
      Add Day:
      <input type="number" name="day" onChange={handleChange} />
      <br />
      Add Month:
      <input type="number" name="month" onChange={handleChange} />
      <br />
      <button
        onClick={() => {
          setStatuteTitle("Updated Date:");
          setNewdate(daysTimesPlusMonths().toString());
        }}
      >
        Change The World
      </button>
    </div>
  );
}
