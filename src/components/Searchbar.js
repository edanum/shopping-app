import styled from "styled-components";

export function SearchBar({ handleInputValue, setLanguage }) {
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  function handleLanguageEnglish() {
    setLanguage("en");
    console.log("Language set to english");
  }

  function handleLanguageGerman() {
    setLanguage("de");
    console.log("Language set to german");
  }

  return (
    <>
      <Bar>
        <button onClick={handleLanguageEnglish}>EN</button>/
        <button onClick={handleLanguageGerman}>DE</button>
        <Form onSubmit={handleSubmit}>
          <Inputfield
            type="text"
            onChange={handleInputValue}
            placeholder="type item here..."
          />
          <Button type="submit">Add Item</Button>
        </Form>
      </Bar>
    </>
  );
}

const Bar = styled.div`
  display: flex;
  gap: 20px;
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
  justify-content: center;
  align-items: center;
`;

const Inputfield = styled.input`
  width: 370px;
  height: 40px;
  font-size: 30px;
  border-radius: 15px;
  text-align: center;
`;
