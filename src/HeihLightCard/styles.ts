import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
   background-color: ${({theme}) => theme.colors.shape};
   width: 300px;
   border-radius: 5px;
   padding: 19px 23px;
   padding-bottom: 42px;
   margin-right: 16px;
   height: 200px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  color: ${({theme}) => theme.colors.text_dark}; 
`
export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
`
export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 32px;
  color: ${({theme}) => theme.colors.text_dark};
  margin-top: 38px;
`
export const LasTransaction = styled.Text`
   font-family: ${({theme}) => theme.fonts.regular};
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
`
export const Footer = styled.View`
   
`
export const Icon = styled(Feather)`
   font-size: 40px;
` 