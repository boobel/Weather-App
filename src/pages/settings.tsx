import React from "react";
import styled from "styled-components";
import { Sidenav } from "../components/Sidenav";
import { Header } from "../components/Header";
import { PremiumBanner } from "../components/PremiumBanner";
import { NewsletterBanner } from "../components/NewsletterBanner";
import { UnitsSettings } from "../components/UnitsSettings";
import { NotificatonSetting } from "../components/NotificationSettings";
import { GeneralSettings } from "../components/GeneralSettings";

const Settings: React.FC = () => {
  return (
    <Wrapper>
      <Sidenav />
      <Main>
        <Header />
        <StyledHeader>Units</StyledHeader>
        <UnitsSettings />
        <StyledHeader>Notifications</StyledHeader>
        <NotificatonSetting />
        <StyledHeader>General</StyledHeader>
        <GeneralSettings />
      </Main>
      <RightSideContent>
        <PremiumBanner />
        <NewsletterBanner />
      </RightSideContent>
    </Wrapper>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
`;

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

const StyledHeader = styled.h1``;

export { Settings };
