import { useState, useEffect } from "react";
import { getMonthNumberByMonthName } from "./utils";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayPicker() {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedHolidayName, setSelectedHolidayName] = useState("");
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      let monthParam = getMonthNumberByMonthName(selectedMonth);
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&year=2022&month=${monthParam}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedMonth]); // ALWAYS add a dependency list here, even if it's just an empty array.

  return (
    <div>
      <div>
        <div style={{ fontWeight: "bold" }}>Pick a Holiday:</div>
        {holidayList.length > 0 &&
          holidayList.map((holiday, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedHolidayName(holiday.name)}
              key={index}
            >
              {holiday.name}
            </div>
          ))}
        <div style={{ fontWeight: "bold" }}>Selected Holiday:</div>
        {selectedHolidayName ? (
          <div>{selectedHolidayName}</div>
        ) : (
          <div>No holiday selected.</div>
        )}
      </div>
    </div>
  );
}
