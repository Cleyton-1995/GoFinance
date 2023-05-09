import React from 'react';
import { Container, Header, Title } from './styles';
import { HistoryCard } from '../../Components/HistoryCard';

export function Resume() {
  return (
    <Container>
      <Header>
         <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard 
         title="Compras"
         amount="R$ 150,50"
         color="red"
      />
      <HistoryCard 
         title="Compras"
         amount="R$ 150,50"
         color="blue"
      />
    </Container>
  );
}