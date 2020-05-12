import React from "react";
import { ContainerHeader, Nav, TextNav, Button, Input } from "./style";

export default function HeaderRender() {
  return (
    <ContainerHeader>
      <Nav>
        <TextNav>Team</TextNav>
        <TextNav>Enterprise</TextNav>
        <TextNav>Explore</TextNav>
        <TextNav>Marketplace</TextNav>
        <TextNav>Pricing</TextNav>
      </Nav>
      <Nav>
        <Input placeholder="Search"></Input>
        <TextNav>Sign</TextNav>
        <Button>Sign up</Button>
      </Nav>
    </ContainerHeader>
  );
}
