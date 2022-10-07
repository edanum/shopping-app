import styled from "styled-components";

export function SearchBar({ handleInputValue }) {
  function handleSubmit(e) {
      e.preventDefault();
      e.target.reset();
    return console.log("Submit gedrückt");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Searchbar
        type="text"
        onChange={handleInputValue}
        placeholder="type item here..."
      />
      <Button type="submit">Add Item</Button>
    </Form>
  );
}

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

const Searchbar = styled.input`
  width: 370px;
  height: 40px;
  font-size: 30px;
  border-radius: 15px;
  text-align: center;
`;
