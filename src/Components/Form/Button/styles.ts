import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
   width: 100%;
   background-color: ${({theme}) => theme.colors.secundary};
   padding: 18px;
   border-radius: 5px;
   align-items: center;
   margin-top: 9px;
`;

export const Title = styled.Text`
   font-family: ${({theme}) => theme.fonts.medium};
   font-size: 14px;
   color: ${({theme}) => theme.colors.shape};
`;