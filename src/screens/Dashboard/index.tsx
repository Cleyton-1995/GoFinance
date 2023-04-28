import React from 'react';
import { Text, View } from 'react-native';
import { Container, Title } from './styles';

interface Props {
   title: string;
}

export function Dashboard({title}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}