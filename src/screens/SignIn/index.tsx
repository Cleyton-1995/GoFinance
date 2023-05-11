import React from "react";
import { Container, Footer, Header, SignInTitle, Title, TitleWrapper } from "./styles";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
           width="120" 
           height="68"
          />

          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
         Faça seu login com {"\n"}
         uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>

      </Footer>
    </Container>
  );
}
