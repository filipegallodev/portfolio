"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <MainBox>
      <HomeWelcomeBox>
        <FirstMessage></FirstMessage>
        <DeveloperName>Olá, eu sou o Filipe Gallo</DeveloperName>
        <DescriptionBox>
          <DescriptionText>
            Um Desenvolvedor especializado em criar aplicações web,
            desenvolvendo tanto a interface do usuário (Front-End) quanto a
            parte da lógica e infraestrutura (Back-End). Meu foco é criar
            soluções visualmente atraentes e que funcionem de maneira eficaz.
          </DescriptionText>
        </DescriptionBox>
        <KnowMoreButton>Conheça mais</KnowMoreButton>
      </HomeWelcomeBox>
    </MainBox>
  );
}

const MainBox = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeWelcomeBox = styled.div`
  max-width: var(--max-width);
  width: 100%;
  text-align: center;
`;

const FirstMessage = styled.span`
  font-size: var(--default-font-size);
`;

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

const KnowMoreButton = styled.button`
  background-color: var(--button-backgroung);
  padding: 1rem 5rem;
  border-radius: var(--border-radius);
  border: none;
  text-transform: uppercase;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
`;
