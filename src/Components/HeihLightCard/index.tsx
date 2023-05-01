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

interface Props {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HeihLightCard({ type, title, amount, lastTransaction }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LasTransaction type={type}>{lastTransaction}</LasTransaction>
      </Footer>
    </Container>
  );
}
