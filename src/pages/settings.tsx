import React from "react";
import styled from "styled-components";
import { Sidenav } from "../components/Sidenav";
import { Header } from "../components/Header";
import { PremiumBanner } from "../components/PremiumBanner";
import { NewsletterBanner } from "../components/NewsletterBanner";

const Settings: React.FC = () => {
  return (
    <Wrapper>
      <Sidenav />
      <Header />
      <RightSideContent>
        <PremiumBanner />
        <NewsletterBanner />
      </RightSideContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2vw;
`;

const RightSideContent = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export { Settings };
