import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #ccc;
  color: ${(props) => (props.primary ? "white" : "black")};
  background-color: ${(props) => (props.primary ? "darkturquoise" : "white")};
  cursor: pointer;
`;
