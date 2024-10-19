import React from 'react';
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './About'; 
import Portfolio from './Portfolio'; 
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

export function App() {
  return (
    <div style={style.appContainer}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
    </div>
  );
}
const style={
  appContainer:{
    //maxWidth: '2100px', // Limit the maximum width for large screens
  }
}
export default App;
