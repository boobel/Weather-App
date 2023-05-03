import React from "react";
import styled from "styled-components";
import { TempSwitch } from "./TemperatureSwitch";
import { WindSwitch } from "./WindSwitch";
import { PressureSwitch } from "./PressureSwitch";

const UnitsSettings: React.FC = () => {
  return (
    <StyledSettings>
      <StyledHeader>TEMPERATURE</StyledHeader>
      <TempSwitch />
      <StyledHeader>WIND SPEED</StyledHeader>
      <WindSwitch />
      <StyledHeader>PRESSURE</StyledHeader>
      <PressureSwitch />
    </StyledSettings>
  );
};

const StyledHeader = styled.h5`
  text-align: left;
  width: 80%;
`;

const StyledSettings = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  box-sizing: border-box;
  width: 50vw;
  border-radius: 1rem;
  background-color: var(--primary-color);
  padding-bottom: 3vh;
`;

export { UnitsSettings };
