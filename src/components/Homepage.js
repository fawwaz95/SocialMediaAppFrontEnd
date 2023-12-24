import { useEffect, useState } from 'react';

import ProfileWidget from './ProfileWidget';
import PostWidget from './PostWidget';
import NewsfeedWidget from './NewsfeedWidget';
import FriendslistWidget from './FriendslistWidget';

const Homepage = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        /*<div className="flex text-white text-2xl bg-gray-900">
            <div className="fixed top-0 h-full w-1/4 pt-20 rounded-full">
                <ProfileWidget />
            </div>
            <div className="flex h-full w-2/4 mt-20 rounded-full">
                <NewsfeedWidget/>
            </div>
            <div className="fixed top-0 h-screen flex items-center justify-end w-1/4 mt-20 rounded-full">
                <FriendslistWidget/>
            </div>
        </div>*/

        <div className="flex bg-zinc-950">
            <div className="fixed top-20 w-1/4 rounded-md ml-4 bg-zinc-900">
                <ProfileWidget />
            </div>
            <div className="m-20 flex flex-grow items-center justify-center">
                <div className="w-1/2">
                    <PostWidget />
                    <NewsfeedWidget />
                </div>
            </div>
            <div className="fixed top-20 right-0 w-1/4 rounded-md ml-4 mr-4 bg-zinc-900">
                <FriendslistWidget />
            </div>
            <div>
                <a href="#">
                    <img src="images/post_icon.svg" className="fixed bottom-0 right-0 h-12 hover:h-16 hover:animate-bounce mr-4 mb-4"/>
                </a>
            </div>
        </div>
    )
}

export default Homepage;