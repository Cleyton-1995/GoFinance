import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Button = styled(RectButton)`
   height: 56px;
   background-color: ${({theme}) => theme.colors.shape};
   border-radius: 5px;
   align-items: center;
   flex-direction: row;
   margin-bottom: 16px;
`;
export const ImageContainer = styled.View`
   height: 100%;
   justify-content: center;
   align-items: center;
   padding: 16px;
   border-color: ${({theme}) => theme.colors.background};
   border-right-width: 1px;
`;
export const Text = styled.Text`
   flex: 1;
   text-align: center;
   font-family: ${({theme}) => theme.fonts.medium};
   font-size: 14px;
`;