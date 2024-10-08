"use client";

import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import Header from "@/components/Header/Header";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <WelcomeSection />
        <AboutMeSection />
        <ProjectsSection />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  height: 100%;
`;
