import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Will create new page components later */
import ProfilePage from './mobile/ProfilePage';
import NewsfeedWidget from './NewsfeedWidget';
import FriendslistPage from './mobile/FriendslistPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Newsfeed" element={<NewsfeedWidget />} />
            <Route path="/Friends" element={<FriendslistPage />} />
        </Routes>
    )
}

export default AppRoutes;