import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IconsProps {
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)`
  width: 48%;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  padding: 16px;
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
