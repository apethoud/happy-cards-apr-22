import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #ccc;
  color: ${(props) => (props.primary ? "white" : "black")};
  background-color: ${(props) => (props.primary ? "darkturquoise" : "white")};
  cursor: pointer;
`;
