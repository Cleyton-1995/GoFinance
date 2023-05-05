import React, { useState } from "react";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";
import { Input } from "../../Components/Form/Input";
import { Button } from "../../Components/Form/Button";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../Components/Form/CategorySelectButton";
import { Modal } from "react-native";
import { CategorySelect } from "../CategorySelect";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
          <CategorySelectButton title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal >
        <CategorySelect/>
      </Modal>
    </Container>
  );
}
