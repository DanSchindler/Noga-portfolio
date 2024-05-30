import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './About'; 
import Portfolio from './Portfolio'; 
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

export function App() {
  return (
    <div style={style.appContainer}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
    </Router>    

    </div>
  );
}
const style={
  appContainer:{
    //maxWidth: '2100px', // Limit the maximum width for large screens
    margin: 'auto'

  }
}
export default App;
