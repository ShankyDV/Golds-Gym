import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    {/* xl - Extra large devices , m = margin auto, The sx prop is a shortcut for defining custom style that has access to the theme */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      {/* Dynamically render ex:- excersise/1 */}
    </Routes>
    <Footer />
  </Box>
);

export default App;
