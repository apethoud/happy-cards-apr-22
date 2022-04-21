import { useEffect } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    </ReactModal>
  );
}
