import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
   width: 100%;
   padding: 16px 18px;
   font-family: ${({theme}) => theme.fonts.regular};
   font-size: 14px;
   color: ${({theme}) => theme.colors.text_dark};
   background-color: ${({theme}) => theme.colors.shape};
   border-radius: 5px;
   margin-bottom: 8px;
`;