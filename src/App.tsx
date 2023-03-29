import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './AppRouter';
import { Navbar } from './shared';

function App() {

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App
