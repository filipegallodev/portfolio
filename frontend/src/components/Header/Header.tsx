import React from "react";
import styled from "styled-components";
import HeaderNavigation from "./HeaderNavigation";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <DeveloperName>
          <Link href="">Filipe Gallo</Link>
        </DeveloperName>
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
