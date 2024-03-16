import React from 'react'
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/page/LoginPage/LoginPage'
import HomePage from './src/page/HomePage/HomePage';
import MainFooter from './src/component/MainFooter/MainFooter';


export default function App() {
  return (
    <PaperProvider>
      {/* <HomePage /> */}
      <MainFooter />
    </PaperProvider>

  )
}