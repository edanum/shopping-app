import styled from "styled-components";

export function Header({ language }) {
  return (
    <Heading>
      {language === "en" ? "Shopping List App" : "Einkauflisten-App"}
    </Heading>
  );
}

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
  padding: 10px;
  background-color: #6c82b5;
  color: #e7e5e5;
  width: 100vw;
`;
