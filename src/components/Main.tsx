import styled from "styled-components";

const MainTile = () => {
  return <StyledContainer>Main Tile</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  height: 30vh;
  background-color: var(red);
`;

export { MainTile };
