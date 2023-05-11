import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
`;
export const Header = styled.View`
   width: 100%;
   height: 70%;
   background-color: ${({theme}) => theme.colors.primmary};
   justify-content: flex-end;
   align-items: center;
`;
export const TitleWrapper = styled.View`
   align-items: center;
`;
export const Title = styled.Text`
   font-family: ${({theme}) => theme.fonts.medium};
   color: ${({theme}) => theme.colors.shape};
   font-size: 30px;
   text-align: center;
   margin-top: 40px;
`;
export const SignInTitle = styled.Text`
   font-family: ${({theme}) => theme.fonts.regular};
   color: ${({theme}) => theme.colors.shape};
   font-size: 16px;
   text-align: center;
   margin-top: 40px;
   margin-bottom: 40px;
`;
export const Footer = styled.View`
   width: 100%;
   height: 30%;
   background-color: ${({theme}) => theme.colors.secundary};
`;
