import { useState } from "react";

export default function HolidayPicker() {
  const [holidayName, setHolidayName] = useState("Thanksgiving");
  console.log("holidayName is: ", holidayName);
  return (
    <div>
      <div>{holidayName}</div>
      <button onClick={() => setHolidayName("New Years")}>
        Change holiday to New Years
      </button>
      <button onClick={() => setHolidayName("Halloween")}>
        Change holiday to Halloween
      </button>
    </div>
  );
}
