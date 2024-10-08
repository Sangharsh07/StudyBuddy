import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Progress from './pages/Progress';
import CourseInterface from './pages/CourseInterface';

function App() {
  return (
    <Router>
      <div className="font-sans max-w-screen-xl mx-auto p-5">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/course" element={<CourseInterface />} />
          <Route path="/course/:id" element={<CourseInterface />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;