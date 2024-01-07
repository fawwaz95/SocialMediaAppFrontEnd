import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Will create new page components later */
import HomePage from '../Neutral/HomePage';
import LoginPage from '../Neutral/LoginPage';
import RegisterPage from '../Neutral/RegisterPage';
import ProfilePage from '../Mobile/ProfilePage';
import NewsfeedWidget from '../Desktop/NewsfeedWidget';
import FriendslistPage from '../Mobile/FriendslistPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Newsfeed" element={<NewsfeedWidget />} />
            <Route path="/Friends" element={<FriendslistPage />} />
        </Routes>
    )
}

export default AppRoutes;