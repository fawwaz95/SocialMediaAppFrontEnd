import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Explore from './components/Explore';
import Following from './components/Following';
import Followers from './components/Followers';
import Saved from './components/Saved';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;