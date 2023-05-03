import React from "react";

import { Container, Header, Title, Form } from "./styles";
import { Input } from "../../Components/Form/Input";
import { Button } from "../../Components/Form/Button";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
