import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SignUpScreen } from './src/screens/SignUp';

export default function App() {
  return (
    <>
      <SignUpScreen />
      <StatusBar style="dark" />
    </>
  );
}
