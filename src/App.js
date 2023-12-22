import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Explore from './components/Explore';
import Following from './components/Following';
import Followers from './components/Followers';
import Saved from './components/Saved';
import Profile from './components/Profile';

import Header from './components/Header';


function App() {

  useEffect(() => {
    // Add event listeners or any necessary logic for scrolling if needed
    const handleScroll = () => {
        // Handle scroll events here if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-1 h-screen">
        <Homepage />
      </div>       
    </div>

    /*<Router>
      <div className="flex h-screen bg-gray-900">
        <Navigation />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Home" element={<Homepage />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Following" element={<Following />} />
            <Route path="/Followers" element={<Followers />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path="/Profile" element={<Profile />} />  
          </Routes>
          </div>
      </div>
  </Router>*/
  );
}

export default App;