import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Will create new page components later */
import HomePage from '../Neutral/HomePage';
import LoginPage from '../Neutral/LoginPage';
import RegisterPage from '../Neutral/RegisterPage';
import ProfilePageContainer from '../Neutral/ProfilePageContainer';
import EditProfilePage from '../Neutral/EditProfilePage';
import NewsfeedWidget from '../Desktop/NewsfeedWidget';
import NewsfeedPage from '../Mobile/NewsfeedPage';
import FriendslistPage from '../Mobile/FriendslistPage';
import OpenProfileImg from '../Neutral/OpenProfileImg';
import { useEffect } from 'react';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Profile" element={<ProfilePageContainer />} />
            <Route path="/Profile/:userName/:isUserProfileClicked"  element={<ProfilePageContainer />} />
            <Route path="/EditProfile" element={<EditProfilePage />} />
            <Route path="/Newsfeed" element={<NewsfeedWidget />} />
            <Route path="/NewsfeedMobile" element={<NewsfeedPage />} />
            <Route path="/Friends" element={<FriendslistPage />} />
            <Route path="/OpenProfileImg" element={<OpenProfileImg />} />
        </Routes>
    )
}

export default AppRoutes;