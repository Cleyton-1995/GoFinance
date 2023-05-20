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
  LoadContainer,
} from "./styles";
import { HeihLightCard } from "../../Components/HeihLightCard";
import {
  TransactionsCards,
  TransactionsCardsProps,
} from "../../Components/TransactionsCards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";

export interface DataListProps extends TransactionsCardsProps {
  id: string;
}

interface HeighLightProps {
  amount: string;
  lasTransactions: string;
}

interface HeighLightData {
  entries: HeighLightProps;
  expensives: HeighLightProps;
  total: HeighLightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [heighLightData, setHeighLightData] = useState<HeighLightData>(
    {} as HeighLightData
  );

  const { signOut, user } = useAuth();

  function getLastTransactionsDate(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const lastTransactions = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString(
      "pt-BR",
      { month: "long" }
    )}`;
  }

  async function loadTransactions() {
    const dataKey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const trasanctionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {
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
      })
      .reverse();

    setTransactions(trasanctionsFormatted);

    const lastTransactionsEntries = getLastTransactionsDate(
      transactions,
      "positive"
    );
    const lastTransactionsExpensives = getLastTransactionsDate(
      transactions,
      "negative"
    );
    const totalInterval = `01 a ${lastTransactionsExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHeighLightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lasTransactions: `Última entrada dia ${lastTransactionsEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lasTransactions: `Última saída dia ${lastTransactionsExpensives}`,
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lasTransactions: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color={theme.colors.primmary} />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: user.photo }} />
                <User>
                  <UserGreeting>Olá, </UserGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>
              <Icon onPress={signOut} name="power" />
            </UserWrapper>
          </Header>

          <HeihLightCards>
            <HeihLightCard
              type="up"
              title="Entradas"
              amount={heighLightData.entries.amount}
              lastTransaction={heighLightData.entries.lasTransactions}
            />
            <HeihLightCard
              type="down"
              title="Saída"
              amount={heighLightData.expensives.amount}
              lastTransaction={heighLightData.expensives.lasTransactions}
            />
            <HeihLightCard
              type="total"
              title="Total"
              amount={heighLightData.total.amount}
              lastTransaction={heighLightData.total.lasTransactions}
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
        </>
      )}
    </Container>
  );
}
