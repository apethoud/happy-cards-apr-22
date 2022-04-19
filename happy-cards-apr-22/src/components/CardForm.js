import { useState } from "react";

export default function CardForm() {
  const [recipientName, setRecipientName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      recipientName,
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
        <button type="submit" className="Button">
          Submit
        </button>
      </form>
    </>
  );
}
