import styled from "styled-components";
import { useState } from "react";

export function SearchBar({ handleInputValue, setLanguage, language }) {
  const [toggledEnglish, setToggleEnglish] = useState(false);
  const [toggledGerman, setToggleGerman] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  function handleLanguageEnglish() {
    setLanguage("en");
    setToggleEnglish(true);
    setToggleGerman(false);

    console.log("Language set to english");
  }

  function handleLanguageGerman() {
    setLanguage("de");
    setToggleGerman(true);
    setToggleEnglish(false);

    console.log("Language set to german");
  }

  return (
    <>
      <Bar>
        <Form onSubmit={handleSubmit}>
          <Inputfield
            type="text"
            onChange={handleInputValue}
            placeholder={language === "en" ? "search..." : "Suche..."}
          />
          {/* <Button type="submit">Add Item</Button> */}
        </Form>
        <LanguageSection>
          <LanguageButton
            onClick={handleLanguageEnglish}
            toggled={toggledEnglish}
          >
            EN 🇺🇸
          </LanguageButton>
          <LanguageButton
            onClick={handleLanguageGerman}
            toggled={toggledGerman}
          >
            DE 🇩🇪
          </LanguageButton>
        </LanguageSection>
      </Bar>
    </>
  );
}

const Bar = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #2a637c;
  color: white;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 875px;
  justify-content: center;
  align-items: center;
`;

const Inputfield = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 15px;
  text-align: center;
  text-align: left;
  padding-left: 20px;
  
`;

const LanguageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const LanguageButton = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.toggled ? "#6c82b5" : "#e8e4e4")};
  color: ${(props) => (props.toggled ? "#ffffff" : "#555555")};
`;
