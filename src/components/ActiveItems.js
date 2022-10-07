import styled from "styled-components";
import { useState } from "react";

export function ActiveItems({ activeItems,clearActiveList }) {
    const [toggled, setToggled] = useState(false);
    
    function handleClear() {
        clearActiveList();
    }
    
    function handleToggle() {
        
    }
  
    return (
    <>
          <Subheader>My List:</Subheader>
          <button onClick={handleClear}>Clear List</button>
      <List>
        {activeItems.map((item) => {
          return (
      
              <ListItem onClick={handleToggle}>
                {item}
              </ListItem>
            
          );
        })}
      </List>
    </>
  );
}

const Subheader = styled.h2`
font-size: 30px;
`

const List = styled.ul`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
  margin: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
`;

const ListItem = styled.button`
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #6c82b5;
  color: #fbf4f4;
  list-style: none;
  width: 90%;
  margin: 0px;
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;

  &:active{
    background-color: black;
  }
`;

const Checkbox = styled.input`
  margin-right: 30px;
  width: 50px;
  height: 30px;
`;
