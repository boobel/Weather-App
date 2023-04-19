import React from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { Sidenav } from "../components/Sidenav";
import { LongForecast } from "../components/LongForecast";

const Weather: React.FC = () => {
  return (
    <Wrapper>
      <Sidenav />
      <>
        <Header />
      </>
      <LongForecast />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
`;

export { Weather };
