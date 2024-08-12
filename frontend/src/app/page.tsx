"use client";

import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import styled from "styled-components";

export default function Home() {
  return (
    <MainBox>
      <WelcomeSection />
      <AboutMeSection />
    </MainBox>
  );
}

const MainBox = styled.main`
  height: 100%;
`;
