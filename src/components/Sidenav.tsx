import styled from "styled-components";
import weatherIcon from "../assets/icons/weather-nav-icon.svg";
import settingsIcon from "../assets/icons/settings-nav-icon.svg";
import citiesIcon from "../assets/icons/list-nav-icon.svg";
import React from "react";

const Sidenav: React.FC = () => {
  return (
    <SideContainer>
      <StyledLogo>☔</StyledLogo>
      <StyledIconList>
        <StyledItem>
          <StyledImage src={weatherIcon} alt="weather icon" />
          <span>Weather</span>
        </StyledItem>
        <StyledItem>
          <StyledImage src={citiesIcon} alt="cities icon" />
          <span>Cities</span>
        </StyledItem>
        <StyledItem>
          <StyledImage src={settingsIcon} alt="settings icon" />
          <span>Settings</span>
        </StyledItem>
      </StyledIconList>
    </SideContainer>
  );
};

const StyledLogo = styled.div`
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

const SideContainer = styled.div`
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
