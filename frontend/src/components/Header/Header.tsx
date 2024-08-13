import React from "react";
import styled from "styled-components";
import HeaderNavigation from "./HeaderNavigation";
import Link from "next/link";
import ProfilePicture from "/public/assets/profile-picture.webp";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link href="">
          <DeveloperInfoContainer>
            <ImageStyled src={ProfilePicture} alt="Foto de Filipe Gallo" />
            <DeveloperName>Filipe Gallo</DeveloperName>
          </DeveloperInfoContainer>
        </Link>
        <HeaderNavigation />
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  padding: 8px 64px;
  box-shadow: 0px 0px 48px 0px #00000015;
  letter-spacing: 1px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeveloperInfoContainer = styled(Container)`
  gap: 16px;
`;

const ImageStyled = styled(Image)`
  width: 64px;
  height: auto;
  border-radius: 40%;
  filter: drop-shadow(0 0 0.75rem var(--main-color));
`;

const DeveloperName = styled.span`
  cursor: pointer;
  font-size: 1.35rem;
  text-transform: uppercase;
  font-weight: 800;
  transition: 0.2s;
  &:hover {
    color: #ff6600;
  }
`;

export default Header;
