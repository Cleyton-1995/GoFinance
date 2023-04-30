import React from "react";
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LasTransaction,
  Title,
} from "./styles";

export function HeihLightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LasTransaction>Última entrada dia 13 de abril</LasTransaction>
      </Footer>
    </Container>
  );
}
