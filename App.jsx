import React from 'react'
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/page/LoginPage/LoginPage'
import HomePage from './src/page/HomePage/HomePage';
import TextField from './src/common/TextField/TextField';


export default function App() {
  return (
    <PaperProvider>
      {/* <HomePage /> */}
      <LoginPage />
      {/* <TextField /> */}
    </PaperProvider>

  )
}