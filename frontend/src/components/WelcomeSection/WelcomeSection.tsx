import { BiggerButton, DefaultSection, MainSection } from "@/styles/styled";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const WelcomeSection = () => {
  return (
    <MainSection>
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
        <Link href="#projetos">
          <BiggerButton>Projetos</BiggerButton>
        </Link>
      </MainSection>
    </MainSection>
  );
};

const DeveloperName = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 1px;
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
