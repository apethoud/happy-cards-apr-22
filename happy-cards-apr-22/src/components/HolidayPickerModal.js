import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

const modalStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    width: 800,
    height: 600,
    inset: 0,
    padding: 0,
  },
};

export default function HolidayPickerModal({ isModalOpen, setIsModalOpen }) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("year");
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      let params;
      if (selectedTimeframe === "year") {
        params = "&year=2022";
      } else if (selectedTimeframe === "month") {
        params = "&year=2022&month=4";
      }
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US${params}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedTimeframe]);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal isOpen={isModalOpen} style={modalStyles}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">Pick a Holiday</div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
      </div>
      <div>{holidayList.length}</div>
    </ReactModal>
  );
}
