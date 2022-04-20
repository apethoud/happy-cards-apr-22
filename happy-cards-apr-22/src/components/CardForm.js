import { useState } from "react";

export default function CardForm() {
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      recipientName,
      recipientEmail,
      senderName,
      senderEmail,
    };
    console.log("payload is: ", payload);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Form-InputWrapper">
          <label className="Label" htmlFor="Their Name">
            Their Name
          </label>
          <input
            className="Input"
            name="Their Name"
            type="text"
            value={recipientName}
            onChange={(event) => setRecipientName(event.target.value)}
          />
        </div>
        <div className="Form-InputWrapper">
          <label className="Label" htmlFor="Their Email">
            Their Email
          </label>
          <input
            className="Input"
            name="Their Email"
            type="text"
            value={recipientEmail}
            onChange={(event) => setRecipientEmail(event.target.value)}
          />
        </div>
        <div className="Form-InputWrapper">
          <div className="Label">Pick a Holiday</div>
          <button className="Button" type="button">
            Choose
          </button>
        </div>
        <div className="Form-InputWrapper">
          <label className="Label" htmlFor="Your Name">
            Your Name
          </label>
          <input
            className="Input"
            name="Your Name"
            type="text"
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
          />
        </div>
        <div className="Form-InputWrapper">
          <label className="Label" htmlFor="Your Email">
            Your Email
          </label>
          <input
            className="Input"
            name="Your Email"
            type="text"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="Button">
          Submit
        </button>
      </form>
    </>
  );
}
