import React from 'react';
import { Container, Title, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';


interface Props extends TouchableOpacityProps {
   title: string;
   type: "up" | "down";
}

const icons = {
   up: "arrow-up-circle",
   down: "arrow-down-circle"
}

export function TransactionTypeButton({title, type, ...rest}: Props) {
  return (
    <Container {...rest} >
      <Icon name={icons[type]} />
      <Title>
         {title}
      </Title>
    </Container>
  );
}