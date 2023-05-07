import React, { useEffect, useState } from "react";
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
import {
  TransactionsCards,
  TransactionsCardsProps,
} from "../../Components/TransactionsCards";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface DataListProps extends TransactionsCardsProps {
  id: string;
}

export function Dashboard({ id }: DataListProps) {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const trasanctionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        }
      }
    );

    setData(trasanctionsFormatted)
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionsCards data={item} />}
        />
      </Transactions>
    </Container>
  );
}
