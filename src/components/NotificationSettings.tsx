import React, { useState } from "react";
import styled from "styled-components";
import { ToggleSwitch } from "./ToggleSwitch";

const NotificatonSetting: React.FC = () => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <StyledSettings>
      <StyledHeader>Notifications</StyledHeader>
      <StyledContent>
        <span>Be aware of the weather </span>
        <ToggleSwitch on={on} onClick={handleClick} />
      </StyledContent>
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

const StyledContent = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export { NotificatonSetting };
