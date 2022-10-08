import styled from "styled-components";

export function Header({ language }) {
  return (
    <Heading>
      {language === "en" ? "Shopping List App" : "Einkauflisten-App"}
    </Heading>
  );
}

const Heading = styled.h1`
  margin: 0px 0px 20px 0px;
  text-decoration: underline 2px #281470;
`;
