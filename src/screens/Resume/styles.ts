import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primmary};

  width: 100%;
  height: 113px;
  align-items: center;
  justify-content: center;
  padding-top: 67px;
  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Content = styled.ScrollView`
  flex: 1;
`;

export const ChartConatiner = styled.SafeAreaView`
  width: 100%;
  align-items: center;
`;

export const MonthSelect = styled.View`
   flex-direction: row;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   margin-top: 24px;
`;

export const MonthSelectButton = styled.TouchableOpacity`

`;

export const MonthSelectIcon = styled(Feather)`
   font-size: 24px;
`;

export const Month = styled.Text`
   font-family: ${({theme}) => theme.fonts.regular};
   font-size: 20;
`;

