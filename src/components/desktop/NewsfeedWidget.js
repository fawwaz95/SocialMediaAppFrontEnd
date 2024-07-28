import { useEffect, useState, useContext, useRef } from 'react';
import { useIsMobile } from '../../contexts/MobileContext';
import { useSelector } from 'react-redux';

import NewsfeedPage from '../Mobile/NewsfeedPage';

const NewsfeedWidget = () => {
    const isMobile = useIsMobile();
    const [newsfeed, setNewsfeed] = useState([]);
    const userInfoState = useSelector((state) => state.userInfo);

    useEffect(() => {
        console.log("Newsfeed.......useEffect......");
        getNewsfeed();
    },[userInfoState]);

    const getNewsfeed = async () => {
        const results = await fetch(`http://localhost:3001/routes/getNewsfeed`);
        const  data = await results.json();

        console.log("The results.......");
        console.log(data);
        setNewsfeed(data);
    }

    const followFriend = async (event, item) => {
        event.preventDefault();
        console.log("Clicked follow button");
        console.log("Need to create a new route, that will save the username into a friends table?");
        console.log(userInfoState.userInfo.userName);
        console.log("item");
        console.log(item);

        const postMethod = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userInfoState.userInfo.userName,
                    friendUserName: item.userName,
                })
        }             
        

        const response = await fetch("http://localhost:3001/routes/followFriend", postMethod);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        console.log("The result.......followFriend");
        console.log(result);
    }


    return (
        <div>
            {!isMobile ? (
                <div className="py-4 ml-8 text-white text-xs">
                    {newsfeed && newsfeed.length > 0 && newsfeed.map((item) => (
                        <div className='bg-zinc-900 rounded-md'>
                            <div id="contentHeader" className="flex items-center pt-4">
                                <div>
                                    <img src="/images/profile_image.jpg" className="rounded-full h-12 w-12 md:h-20 md:w-20 mr-4 ml-4" alt="Profile" />
                                </div>
                                <div className="flex-1 pl-4">
                                    <div>{item.userName}</div>
                                    <div className="text-slate-400">{item.location}</div>
                                </div>
                                <div onClick={(e)=> followFriend(e, item)} className="flex m-auto justify-between p-2 bg-slate-700 rounded-full mr-4">
                                    <a href="#">
                                        <img src="images/following_icon.svg" className="h-5" alt="Follow" />
                                    </a>
                                </div>
                            </div>
                            <div id="contentBody">
                                <div className="flex flex-col items-start">
                                    <div className="py-4 pl-4">Caption</div>
                                    <img src={item.url} className="pt-4 pb-4 max-h-96 max-w-full self-center" alt="Post" key={new Date()}/>
                                </div>
                                <div className="flex">
                                    <div className="pl-4 pr-4 pb-4">
                                        <img src="/images/heart_icon.svg" className="h-4" alt="Like" />
                                    </div>
                                    <div>
                                        <img src="/images/comment_icon.svg" className="h-4" alt="Comment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/*<div id="content" className="flex-col p-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> Immanuel Quickley </div>
                                <div className="text-slate-400"> Toronto, ON</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-5" /></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col items-start">
                                <div className="py-4"> Caption </div>
                                <img src={ newsfeed && newsfeed[0].url} className="pt-4 pb-4" />
                            </div>
                            <div className="flex">
                                <div className="pr-4"> <img src="/images/heart_icon.svg" className="h-4"></img> </div>
                                <div> <img src="/images/comment_icon.svg" className="h-4"></img> </div>
                            </div>
                        </div>
                    </div>
                    <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> Kevin Hart </div>
                                <div className="text-slate-400"> Philadelphia, PEN</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-6" /></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col items-start">
                                <div className="py-4"> Caption </div>
                                <img src="/images/coolHouse.webp" className="pt-4 pb-4" />
                            </div>
                            <div className="flex">
                                <div className="pr-4"> <img src="/images/heart_icon.svg" className="h-4"></img> </div>
                                <div> <img src="/images/comment_icon.svg" className="h-4"></img> </div>
                            </div>
                        </div>
                    </div>
                    <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> John Doe </div>
                                <div className="text-slate-400"> San Fransico, CA</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-5" /></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col items-start">
                                <div className="py-4"> Caption </div>
                                <img src="/images/coolHouse.webp" className="pt-4 pb-4" />
                            </div>
                            <div className="flex">
                                <div className="pr-4"> <img src="/images/heart_icon.svg" className="h-4"></img> </div>
                                <div> <img src="/images/comment_icon.svg" className="h-4"></img> </div>
                            </div>
                        </div>
                     </div>*/}
                </div>

            ) : (
                <NewsfeedPage />
            )}
        </div>
    )
}


export default NewsfeedWidget;