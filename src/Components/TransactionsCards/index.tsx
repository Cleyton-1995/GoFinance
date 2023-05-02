import React from "react";
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles";

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionsCardsProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionsCardsProps;
}

export function TransactionsCards({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
<<<<<<< HEAD
        {data.amount}</Amount>
=======
        {data.amount}
      </Amount>
>>>>>>> 8593af8b50935e370ac85ed1d909100c0be49ba7

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
