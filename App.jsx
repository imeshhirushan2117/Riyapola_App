import React from 'react'
import LoginPage from './src/page/LoginPage/LoginPage'
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <LoginPage />
    </PaperProvider>

  )
}