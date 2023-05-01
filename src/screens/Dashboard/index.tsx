import React from "react";
import { Text, View } from "react-native";
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
} from "./styles";
import { HeihLightCard } from "../../HeihLightCard";

export function Dashboard() {
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
      <HeihLightCards horizontal showsHorizontalScrollIndicator={false}>
        <HeihLightCard />
        <HeihLightCard />
        <HeihLightCard />
      </HeihLightCards>
    </Container>
  );
}
