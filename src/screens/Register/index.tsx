import React from "react";

import { Container, Header, Title, Form, Fields } from "./styles";
import { Input } from "../../Components/Form/Input";
import { Button } from "../../Components/Form/Button";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeButton title="Income" type="up" />
          <TransactionTypeButton title="Outcome" type="down" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
