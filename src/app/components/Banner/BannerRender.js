import React from "react";
import { ContainerBanner, Title, Description, Button } from "./style";

export default function BannerRender() {
  return (
    <ContainerBanner>
      <Title>Create a new profile</Title>
      <Description>Sign up for create a new profile.</Description>
      <Button>Sign up</Button>
    </ContainerBanner>
  );
}
