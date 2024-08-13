import {
  DefaultContainer,
  DefaultSection,
  SectionSubTitle,
  SectionTitle,
} from "@/styles/styled";
import React from "react";
import styled from "styled-components";
import Technologies from "../Technologies.tsx/Technologies";

const AboutMeSection = () => {
  return (
    <DefaultSection id="sobre">
      <DefaultContainer>
        <SectionTitle>Sobre</SectionTitle>
        <ContentContainer>
          <DescriptionContainer>
            <SectionSubTitle>Conheça um pouco sobre mim</SectionSubTitle>
          </DescriptionContainer>
          <TechnologiesContainer>
            <SectionSubTitle>Habilidades</SectionSubTitle>
            <Technologies />
          </TechnologiesContainer>
        </ContentContainer>
      </DefaultContainer>
    </DefaultSection>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: space-between;
  gap: 32px;
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;

const TechnologiesContainer = styled.div`
  width: 100%;
`;

export default AboutMeSection;
