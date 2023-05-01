import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
