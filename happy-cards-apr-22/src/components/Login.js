import { useState } from "react";
import LabeledTextInput from "./LabeledTextInput";
import { Button } from "./StyledComponents";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LabeledTextInput
          name="Email"
          value={email}
          setValue={setEmail}
          inputType="email"
        />
        <LabeledTextInput
          name="Password"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
        <Button primary>Login</Button>
      </div>
    </div>
  );
}
