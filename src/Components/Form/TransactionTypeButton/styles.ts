import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.text};
  padding: 16px;

  ${({isActive, type}) => isActive && type === "up" && css`
      background-color: ${({ theme }) => theme.colors.success_light};
  `}

  ${({isActive, type}) => isActive && type === "down" && css`
      background-color: ${({ theme }) => theme.colors.attention_light};
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: 24px;
  margin-right: 12px;
  color: ${({theme, type}) => type === "up" ? theme.colors.success : theme.colors.attention};
`;
