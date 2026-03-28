import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/landing-page';
import StudentDashboard from'./pages/StudentDashboard';
import MyProject from'./pages/Myproject';
import './App.css';
import CreateProjectModal from'./pages/CreateProjectModal';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
       <Routes>
        <Route path="/"element={<LandingPage />}/>
        <Route path="/StudentDashboard"element={<StudentDashboard/>}/>
          <Route path="/MyProject"element={<MyProject/>}>

          </Route>
       </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}
export default App