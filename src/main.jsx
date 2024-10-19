import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import UnderConstruction from './screens/UnderConstruction.jsx'
import { Container, useMediaQuery } from '@mui/material'
import {ScrollRestoration } from 'react-router-dom';

const Root = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        width: isMobile ? '100%' : '90%',
        maxWidth: isMobile ? '100%' : '3000px',
      }}
    >
      {/* <UnderConstruction/> */}
      <App />
  
    </Container>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
