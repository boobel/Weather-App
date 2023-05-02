import React from "react";
import styled from "styled-components";

const NewsletterBanner: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>Stay Up To Date!</StyledHeader>
      <StyledLine />
      <StyledNewsText>
        Never miss an update, feature or exciting news with a weekly newsletter
        personalized just fot you.
      </StyledNewsText>
      <StyledSignUpBtn>Sign Up!</StyledSignUpBtn>
    </StyledContainer>
  );
};

const StyledHeader = styled.h1``;

const StyledLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
  border-color: grey;
  width: 80%;
`;

const StyledNewsText = styled.article`
  padding-inline: 3.5vw 3.5vw;
  writing-mode: horizontal-tb;
  text-align: center;
`;

const StyledSignUpBtn = styled.button`
  padding: 1vh 2vw;
  font-size: 1.5vw;
  background-color: #0377cd;
  border: none;
  color: white;
  border-radius: 1rem;
  transition: all 0.5s ease-in;
  margin-top: 1.5vh;

  &:hover {
    scale: 1.05;
    background-color: #1d8bdf;
  }
`;

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

export { NewsletterBanner };
