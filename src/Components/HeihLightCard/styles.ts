import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secundary : theme.colors.shape};
  width: 300px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: 42px;
  margin-right: 16px;
`;
export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 32px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;
export const LasTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
export const Footer = styled.View``;
export const Icon = styled(Feather)<TypeProps>`
  font-size: 40px;

  ${({type}) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  ${({type}) =>
    type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};

  ${({type}) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;
