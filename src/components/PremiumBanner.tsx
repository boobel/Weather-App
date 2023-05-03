import React from "react";
import styled from "styled-components";

const PremiumBanner: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeaderBig>Weather Plus</StyledHeaderBig>
      <StyledLine />
      <StyledHeaderSmall>Get The Premium Experience</StyledHeaderSmall>
      <StyledList>
        <StyledListItem>Ad free</StyledListItem>
        <StyledListItem>Customizable weather notifications</StyledListItem>
        <StyledListItem>Personalized weather news</StyledListItem>
      </StyledList>
      <StyledButton>$4.99/month</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  box-sizing: border-box;
  width: 30vw;
  height: fit-content;
  border-radius: 1rem;
  background-color: var(--primary-color);
  padding-bottom: 2vh;
`;

const StyledHeaderBig = styled.h1`
  margin: 1vh;
`;

const StyledHeaderSmall = styled.h3`
  margin: 1vh;
  text-align: center;
`;

const StyledLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
  border-color: grey;
  width: 80%;
`;

const StyledList = styled.ul``;

const StyledListItem = styled.li``;

const StyledButton = styled.button`
  padding: 1vh 2vw;
  font-size: 2.5vw;
  background-color: #2b364b;
  border: none;
  color: #afa2a2;
  border-radius: 1rem;
  transition: all 0.5s ease-in;

  &:hover {
    scale: 1.05;
    background-color: #323e55;
  }
`;

export { PremiumBanner };
