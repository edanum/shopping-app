import styled from "styled-components";

export function RecentItems({ recentItems, language }) {
  return (
    <Container>
      {recentItems.map((item) => {
          return (
            <RecentList>
              <RecentItem>
                <div>{language === "de" ? item.de : item.en}</div>
              </RecentItem>
            </RecentList>
          );
      })}
    </Container>
  );
}

const Container = styled.div``;

const RecentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
  justify-content: center;
`;

const RecentItem = styled.button`
  display: flex;
  align-items: center;
  background-color: lightgray;
  color: black;
  height: 30px;
  border-radius: 10px;
  padding: 10px;
  `
