import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Will create new page components later */
import Homepage from './Homepage';
import ProfilePage from './mobile/ProfilePage';
import NewsfeedWidget from './desktop/NewsfeedWidget';
import FriendslistPage from './mobile/FriendslistPage';

const AppRoutes = ( { isMobile }) => {
    return (
        <Routes>
            <Route path="/" element={<Homepage isMobile={isMobile}/>} />
            <Route path="/Profile" element={<ProfilePage isMobile={isMobile}/>} />
            <Route path="/Newsfeed" element={<NewsfeedWidget isMobile={isMobile}/>} />
            <Route path="/Friends" element={<FriendslistPage isMobile={isMobile}/>} />
        </Routes>
    )
}

export default AppRoutes;