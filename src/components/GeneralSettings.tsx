import React, { useState } from "react";
import styled from "styled-components";
import { ToggleSwitch } from "./ToggleSwitch";

const GeneralSettings: React.FC = () => {
  const [onHour, setOnHour] = useState(false);
  const [onLocation, setOnLocation] = useState(false);

  const handleClickHour = () => {
    setOnHour(!onHour);
  };

  const handleClickLocation = () => {
    setOnLocation(!onLocation);
  };

  return (
    <StyledSettings>
      <StyledContent>
        <StyledHeader>12 Hour Time</StyledHeader>
        <ToggleSwitch on={onHour} onClick={handleClickHour} />
      </StyledContent>
      <StyledContent>
        <StyledHeader>Location</StyledHeader>
        <ToggleSwitch on={onLocation} onClick={handleClickLocation} />
      </StyledContent>
    </StyledSettings>
  );
};

const StyledHeader = styled.h5`
  text-align: left;
`;

const StyledContent = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export { GeneralSettings };
