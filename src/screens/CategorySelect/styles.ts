import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  height: 113px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primmary};
  align-items: center;
  padding-top: 67px;
  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
`;
export const Category = styled.View`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: 20px;
  margin-right: 16px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text_dark};
`;
