import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import UnderConstruction from './screens/UnderConstruction.jsx';
import { Container } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth="false" sx={{maxWidth: '2250px'}} >
    {/* <UnderConstruction/> */}
    <App />
    </Container>
  </React.StrictMode>,
)
