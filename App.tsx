import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider } from "./src/hooks/auth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer onReady={onLayoutRootView}>
        {/* <AppRoutes /> */}
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </ThemeProvider>
  );
}
