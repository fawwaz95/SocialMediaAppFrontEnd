import { useEffect, useState, useContext} from 'react';

import ProfileWidget from '../Desktop/ProfileWidget';
import PostWidget from '../Desktop/PostWidget';
import NewsfeedWidget from '../Desktop/NewsfeedWidget';
import FriendslistWidget from '../Desktop/FriendslistWidget';
import { useIsMobile } from '../../contexts/MobileContext';
import { useSelector } from "react-redux";

const Homepage = () => {
    const isMobile = useIsMobile();
    const state = useSelector((state) => state);
    console.log("store", state);
    return (
        <div className="flex">
          {!isMobile ? (
            <>
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
                  <img
                    src="images/post_icon.svg"
                    className="fixed bottom-0 right-0 h-12 hover:h-16 hover:animate-bounce mr-4 mb-4"
                  />
                </a>
              </div>
            </>
          ) : (
            <div className="m-4 pt-20 w-full">
              <NewsfeedWidget/>
              <div>
                <a href="#">
                  <img
                    src="images/post_icon.svg"
                    className="fixed bottom-0 right-0 h-12 hover:h-16 hover:animate-bounce mr-4 mb-4"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      );
}

export default Homepage;