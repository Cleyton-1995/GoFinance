import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./src/hooks/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
          <StatusBar style="light" translucent backgroundColor="transparent" />
        </ThemeProvider>
    </GestureHandlerRootView>
  );
}
