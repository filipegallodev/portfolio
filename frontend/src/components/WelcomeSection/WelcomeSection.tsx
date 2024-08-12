import { BiggerButton, DefaultSection, MainSection } from "@/styles/styled";
import React from "react";
import styled from "styled-components";

const WelcomeSection = () => {
  return (
    <DefaultSection>
      <MainSection>
        <DeveloperName>Olá, sou o Filipe Gallo</DeveloperName>
        <DescriptionBox>
          <DescriptionText>
            Sou um Desenvolvedor especializado em criar aplicações web,
            desenvolvendo tanto a interface do usuário (Front-End) quanto a
            parte da lógica e infraestrutura (Back-End). Meu objetivo é criar
            soluções visualmente atraentes e que funcionem de maneira eficaz.
          </DescriptionText>
        </DescriptionBox>
        <BiggerButton>Projetos</BiggerButton>
      </MainSection>
    </DefaultSection>
  );
};

const DeveloperName = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 900;
`;

const DescriptionBox = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 24px auto 48px auto;
`;

const DescriptionText = styled.p`
  font-size: var(--default-font-size);
`;

export default WelcomeSection;
