import React from 'react';

import { Container, Header, Title } from "./styles";
import { Input } from '../../Components/Form/Input';

export function Register() {
  return (
    <Container>
      <Header>
         <Title>Cadastro</Title>
      </Header>

      <Input placeholder="Nome" />
    </Container>
  );
}