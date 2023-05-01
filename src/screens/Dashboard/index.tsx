import React from "react";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HeihLightCards,
  Transactions,
  Title,
} from "./styles";
import { HeihLightCard } from "../../Components/HeihLightCard";
import { TransactionsCards } from "../../Components/TransactionsCards";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/Cleyton-1995.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Cleyton</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HeihLightCards>
        <HeihLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HeihLightCard
          type="down"
          title="Saída"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HeihLightCard
          type="total"
          title="Total"
          amount="R$ 16.241,00"
          lastTransaction="01 à 16 de abril"
        />
      </HeihLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsCards />
      </Transactions>
    </Container>
  );
}
