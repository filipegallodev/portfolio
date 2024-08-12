import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavigationItem href="">Home</NavigationItem>
          </li>
          <li>
            <NavigationItem href="#sobre">Sobre</NavigationItem>
          </li>
          <NavigationItem href="#projetos">Projetos</NavigationItem>
          <NavigationItem href="#contato">Contato</NavigationItem>
        </ul>
      </nav>
    </div>
  );
};

const NavigationItem = styled(Link)`
  padding: 32px;
  display: inline-block;
  cursor: pointer;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    color: #ff6600;
  }
`;

export default HeaderNavigation;
