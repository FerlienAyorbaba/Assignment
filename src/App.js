import React from 'react';
import { Routes, Route } from "react-router-dom";
import High from './pages/High';
import PopularProduct from './pages/PopularProduct';
import Low from './pages/Low';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PopularProduct />} />
      <Route path="/low" element={<Low />} />
      <Route path="/high" element={<High />} />
      
    </Routes>
  );
}

export default App;