import React from "react";
import styled from "styled-components";

const LongForecast: React.FC = () => {
  return (
    <SideContainer>
      <h1>7 Day forecast</h1>
    </SideContainer>
  );
};

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  width: 30vw;
  height: 95vh;
  border-radius: 1rem;
  background-color: var(--primary-color);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export { LongForecast };
