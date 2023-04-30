import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 278px;
  background-color: ${({ theme }) => theme.colors.primmary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
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
