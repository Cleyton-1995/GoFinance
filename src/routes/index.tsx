import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
}