import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import SearchPage from './Pages/SearchPage/SearchPage';
import History from './Pages/History/History';
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}></Navbar>
      <Routes>
        <Route path="/" element={<Home setSidebar={setSidebar} sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/history" element={<History />} /> {/* thêm dòng này */}
      </Routes>
    </div>
  );
};
export default App;
