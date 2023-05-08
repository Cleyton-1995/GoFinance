import React, { useCallback, useEffect, useState } from "react";
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
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TransactionsCardsProps {
  id: string;
}

interface HeighLightProps {
  amount: string;
}

interface HeighLightData {
  entries: HeighLightProps;
  expensives: HeighLightProps;
  total: HeighLightProps;
}

export function Dashboard({ id }: DataListProps) {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [heighLightData, setHeighLightData] = useState<HeighLightData>(
    {} as HeighLightData
  );

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const trasanctionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setTransactions(trasanctionsFormatted);

    const total = entriesTotal - expensiveTotal;

    setHeighLightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

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
          amount={heighLightData.entries.amount}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HeihLightCard
          type="down"
          title="Saída"
          amount={heighLightData.expensives.amount}
          lastTransaction="Última saída dia 03 de abril"
        />
        <HeihLightCard
          type="total"
          title="Total"
          amount={heighLightData.total.amount}
          lastTransaction="01 à 16 de abril"
        />
      </HeihLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionsCards data={item} />}
        />
      </Transactions>
    </Container>
  );
}
