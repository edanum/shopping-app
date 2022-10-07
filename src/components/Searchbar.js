import styled from "styled-components";

export function SearchBar({ handleInputValue }) {
  return <Searchbar type="text" onChange={handleInputValue} />;
}

const Searchbar = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
`;
