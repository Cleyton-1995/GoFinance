import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

<<<<<<< HEAD
interface TransactionProps {
  type: "positive" | "negative";
=======
interface TransactionTypeProps {
  type: "positive" | "negative"
>>>>>>> 8593af8b50935e370ac85ed1d909100c0be49ba7
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

<<<<<<< HEAD
export const Amount = styled.Text<TransactionProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => type === "positive" ? theme.colors.success : theme.colors.attention};
=======
export const Amount = styled.Text<TransactionTypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => type === "positive" ? theme.colors.success :  theme.colors.attention};
>>>>>>> 8593af8b50935e370ac85ed1d909100c0be49ba7
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
