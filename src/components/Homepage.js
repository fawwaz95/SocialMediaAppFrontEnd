import { useEffect, useState } from 'react';

import ProfileWidget from './ProfileWidget';
import NewsfeedWidget from './NewsfeedWidget';

const Homepage = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className="flex text-white text-2xl bg-gray-900">
            <div className="sticky top-0 h-1/2 w-1/4 pt-20 rounded-full">
                <ProfileWidget />
            </div>
            <div className="w-1/3 mt-20 rounded-full">
                <NewsfeedWidget />
            </div>
        </div>
    )
}

export default Homepage;