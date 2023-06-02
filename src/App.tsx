import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}>1</Route>
        <Route path="/home" element={<Home />}>1</Route>
      </Routes>
    </Router>
  )
}

export default App
