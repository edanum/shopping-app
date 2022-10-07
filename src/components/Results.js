import styled from "styled-components";
import { useEffect, useState } from "react";
import nanoid from "nanoid"

export default function Results({inputValue}) {
    // Fetch Data & Set State
    useEffect(() => {
        fetchData();
        async function fetchData() {
            const url = "https://fetch-me.vercel.app/api/shopping/items";
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }
    }, [])
    
    // Set initalState
    const [data, setData] = useState([]);
    const shoppingNames =  data?.data?.map((items) => {
        return items.name.de
    })

   

  return (
    <List>
      <ListItem>
        {shoppingNames?.filter((name) => {
          return name === inputValue;
        })}
      </ListItem>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const ListItem = styled.li`
  background-color: grey;
  color: white;
  border-radius: 10px;
  padding: 5px;
`;
