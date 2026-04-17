import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/landing-page';
import StudentDashboard from'./pages/StudentDashboard';
import MyProject from'./pages/Myproject';
import './App.css';
import CreateProjectModal from'./pages/CreateProjectModal';
import InputOutput from './pages/inputOutput';
import Maintenance from './pages/Maintenance';
import { Rule } from 'postcss';
import StorekeeperDashboard from'./pages/StorekeeperDashboard'
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
       <Routes>
        <Route path="/"element={<LandingPage />}/>
        <Route path="/StudentDashboard"element={<StudentDashboard/>}/>
          <Route path="/MyProject"element={<MyProject/>}></Route>
        <Route path="/InputOutput"element={<InputOutput/>}/>
        <Route path="/Maintenance"element={<Maintenance/>}/>
        <Route path="/StorekeeperDashboard"element={<StorekeeperDashboard/>}/>
       </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}
export default App