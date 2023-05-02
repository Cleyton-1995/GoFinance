import React from "react";
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
  TransactionList,
} from "./styles";
import { HeihLightCard } from "../../Components/HeihLightCard";
import { TransactionsCards, TransactionsCardsProps } from "../../Components/TransactionsCards";

interface DataListProsp extends TransactionsCardsProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: " R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "13/04/2020",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];

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
        <TransactionList
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }) => <TransactionsCards data={item} />}
        />
      </Transactions>
    </Container>
  );
}
