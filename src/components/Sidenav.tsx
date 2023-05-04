import styled from "styled-components";
import weatherIcon from "../assets/icons/weather-nav-icon.svg";
import settingsIcon from "../assets/icons/settings-nav-icon.svg";
import React from "react";
import { Link } from "react-router-dom";

const Sidenav: React.FC = () => {
  return (
    <SideContainer>
      <StyledLogo>☔</StyledLogo>
      <StyledIconList>
        <StyledItem>
          <StyledLink to="/">
            <StyledImage src={weatherIcon} alt="weather icon" />
            <span>Weather</span>
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="/settings">
            <StyledImage src={settingsIcon} alt="settings icon" />
            <span>Settings</span>
          </StyledLink>
        </StyledItem>
      </StyledIconList>
    </SideContainer>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #afa2a2;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledLogo = styled.figure`
  font-size: calc(2rem + 1.5vw);
  margin: 3vh 2vw;
`;

const StyledIconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem;
  & > div {
    text-align: center;
    font-size: calc(0.5rem + 0.5vw);
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 5vw;
  justify-content: center;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.2) translateY(5px);
  }
`;

const StyledImage = styled.img`
  height: auto;
  width: 50%;
  max-width: 100px;
  min-width: 25px;
  object-fit: contain;
`;

const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  min-width: 75px;
  width: 10vw;
  height: 95vh;
  border-radius: 1rem;
  background-color: var(--primary-color);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export { Sidenav };
