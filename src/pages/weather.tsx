import React from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { Sidenav } from "../components/Sidenav";
import { LongForecast } from "../components/LongForecast";
import { ShortForecast } from "../components/ShortForecast";
import { AirQuality } from "../components/AirQuality";
import { MainTile } from "../components/Main";

const Weather: React.FC = () => {
  return (
    <Wrapper>
      <Sidenav />
      <Main>
        <Header />
        <MainTile />
        <ShortForecast />
        <AirQuality />
      </Main>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { Weather };
