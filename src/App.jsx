import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import History from './pages/History/History';
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
  typography:{
    fontFamily: 'ubuntu',
  },
  palette: {
    primary:{
      main: "#9785BA",
      green: "#AF9FCD",
      secondary: "#D7C7F4"
    }
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius: '8px',
          textTransform: "none"
        },
        contained:{
          color: "#fff"
        }
      }
    }
  }
})

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App
