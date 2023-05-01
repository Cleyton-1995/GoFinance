import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primmary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 28};
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 17px;
`;
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 24px;
`;
export const HeihLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: 130px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 80px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;
