import React from 'react'
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/page/LoginPage/LoginPage'
import HomePage from './src/page/HomePage/HomePage';



export default function App() {
  return (
    <PaperProvider>
      <HomePage />
    </PaperProvider>

  )
}