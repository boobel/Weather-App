import React, { useState } from "react";
import styled from "styled-components";

const TempSwitch: React.FC = () => {
  const [unit, setUnit] = useState("Celsius");

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

  return (
    <StyledSwitchButton>
      <StyledOption selected={unit === "Celsius"}>
        <input
          type="radio"
          name="unit"
          value="Celsius"
          checked={unit === "Celsius"}
          onChange={handleUnitChange}
        />
        Celsius
      </StyledOption>
      <StyledOption selected={unit === "Farenheit"}>
        <input
          type="radio"
          name="unit"
          value="Farenheit"
          checked={unit === "Farenheit"}
          onChange={handleUnitChange}
        />
        Farenheit
      </StyledOption>
    </StyledSwitchButton>
  );
};

const StyledSwitchButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  height: 3vh;
  border-radius: 10px;
  background-color: #101b2b;
  padding: 2px;
`;

interface StyledOptionProps {
  selected: boolean;
}

const StyledOption = styled.label<StyledOptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 1.5vh;
  font-weight: 600;
  background-color: ${(props) => (props.selected ? "#2b374a" : "#101b2b")};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #36445c;
    color: #fff;
  }

  input[type="radio"] {
    position: absolute;
    visibility: hidden;
  }
`;

export { TempSwitch };
