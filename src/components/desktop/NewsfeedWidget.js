import { useEffect, useState, useContext, useRef } from 'react';
import { useIsMobile } from '../../contexts/MobileContext';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import NewsfeedPage from '../Mobile/NewsfeedPage';
import ConfirmBox from '../WindowPopups/ConfirmBox';
import CommentBox from '../WindowPopups/CommentBox';

const NewsfeedWidget = () => {
    const isMobile = useIsMobile();
    const [newsfeed, setNewsfeed] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);
    const [confirmWindow, showConfirmWindow] = useState(false);
    const [userToUnfollow, setUserToUnfollow] = useState("");
    const [postInteractions, setPostInteractions] = useState([]);
    const [likedPost, setLikedPost] = useState(false);
    const [likedPostBy, setLikedPostBy] = useState([]);
    const [commentWindow, openCommentWindow] = useState(false);
    const userInfoState = useSelector((state) => state.userInfo);

    useEffect(() => {
        const fetchAllData = async () => {
            await getNewsfeed();
            await getFollowing();
        };
    
        if (userInfoState.userInfo.userName) {
            fetchAllData();
        }
    }, [userInfoState.userInfo.userName]);

    const getNewsfeed = async () => {
        const results = await fetch(`http://localhost:3001/routes/getNewsfeed`);
        const  data = await results.json();

        console.log("The results.......");
        console.log(data);
        setNewsfeed(data);
    }

    const getFollowing = async () => {
        const response = await fetch(`http://localhost:3001/routes/getFollowingFollowers?user_id=${userInfoState.userInfo.userName}`);
            
        if (!response.ok) throw new Error("Failed to fetch following/followers in newsfeed......");
        
        const data = await response.json();

        console.log("FOUND ALL FOLLOWING USERS....");
        console.log(data);

        if (data.success === false) {
            console.log("User isnt following anyone.....");
            setFollowingUsers([]);
        }else{
            setFollowingUsers(data.followingFollowersData.following);
        }
    }

    const followFriend = async (event, item) => {
        event.preventDefault();
        console.log("followFriend func invoked....");

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

    const unFollowFriend = async (userToUnfollow) => {
        console.log("unFollowFriend func invoked....");
        console.log(userToUnfollow);
        setUserToUnfollow(userToUnfollow)
        showConfirmWindow(true);
        /*try{
            const response = await fetch(`http://localhost:3001/routes/removeFollower?user_id=${userInfoState.userInfo.userName}&friend_id=${userToRemove}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if(!response.ok){
                throw new Error("Unable to fetch remove follower....." + "Response: " + response.ok);
            }
    
            const data = await response.json();
            console.log(data);
    
            }catch(error){
                console.error(error);
                console.log("Error in unFollowFriend....");
            }*/
    }

    useEffect(() => {
        console.log("Updated hook....likedPostBy");
        console.log(likedPostBy);
    },[likedPostBy]);

    /*const toggleLikePost = async (userName, url) => {
        setLikedPost(true);

        setTimeout(()=>{
            console.log("Create heart animation...");
            setLikedPost(false);
        }, 2500);
        
        setPostInteractions(prev => {
                const existingPost = prev.find(post => post.id === url && post.userId === userName);
                console.log("Existing");
                console.log(existingPost);
                if (existingPost) {
                    // If already liked, toggle to unlike
                    return prev.map(post =>
                        post.id === url && post.userId === userName
                            ? { ...post, liked: !post.liked }
                            : post
                    );
                } else {
                    // If not liked, add a new entry
                    return [
                        ...prev,
                        {
                            id: url,
                            userId: userName,
                            userName: userInfoState.userInfo.userName,
                            liked: true,
                            comments: []
                        }
                    ];
            }
        });
    };*/

    const toggleLikePost2 = async (url, userName) => {
        //setLikedPost(true);

        try {
            const likedPost = {
                url: url,
                likedBy: userInfoState.userInfo.userName
            }

            const postMethod = {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({likedPost}),
            }

            const response = await fetch("http://localhost:3001/routes/likedPost", postMethod);

            if (!response.ok) {
                console.error("Http error likedPost: " + response.status);
            }

            const jsonData = await response.json();

            if (jsonData && jsonData.success === true) {
                console.log("likedPost was successful!!!");
                console.log(jsonData);
            
                //After successfull like....this should then get the likePosts and check if the current user has a post int he newsfeed that he clicked like on
                //Then those images should have a red heart
            } else {
                console.log("Error in likedPost.............");
                console.log(jsonData);
            }
            
        }catch (error) {
            console.error("Caught an error toggleLikePost2.......");
            console.error(error.status + " " + error.message);
        }
    }

    const commentOnPost = async () => {
        console.log("commentOnPost invoked.... ");
        openCommentWindow(current => !current);
    }
        


    return (
        <div>
            {!isMobile ? (
                <div className="py-4 ml-8 text-white text-xs">
                    {newsfeed && newsfeed.length > 0 && newsfeed.map((item) => (
                        <div className='bg-zinc-900 rounded-md'>
                            <div id="contentHeader" className="flex items-center pt-4">
                                <Link to={`/Profile/${item.userName}/${true}`}>
                                    <div>
                                        <img src="/images/profile_image.jpg" className="rounded-full h-12 w-12 md:h-20 md:w-20 mr-4 ml-4" alt="Profile" />
                                    </div>
                                </Link>
                                <div className="flex-1 pl-4">
                                    <div>{item.userName}</div>
                                    <div className="text-slate-400">{item.location}</div>
                                </div>
                                <div onClick={(e)=> followingUsers.includes(item.userName) ? unFollowFriend(item.userName) : followFriend(e, item)} className={followingUsers.includes(item.userName) ? "flex m-auto justify-between p-2 bg-green-400 rounded-full mr-4" : "flex m-auto justify-between p-2 bg-slate-700 rounded-full mr-4"}>
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
                                    <div className="pl-4 pr-4 pb-4" onClick={() => toggleLikePost2(item.url, item.userName)}>
                                        {/*{likedPostBy &&
                                            likedPostBy.map((likePostByItems) => {
                                                if (
                                                    likePostByItems.url === item.url &&
                                                    likePostByItems.likes.indexOf(userInfoState.userInfo.userName) !== -1
                                                ) {
                                                    return <img src="/images/heart_icon_temp.svg" className="h-4" alt="Liked" />;
                                                } else {
                                                    return <img src="/images/heart_white_icon.svg" className="h-4" alt="Not Liked" />;
                                                }
                                        })}*/}
                                    <img
                                        src={likedPost ? "/images/heart_icon_temp.svg" : "/images/heart_white_icon.svg"}
                                        className="h-4 transition-transform duration-300 scale-125"
                                        alt="Like"
                                    />
                                    </div>
                                    <div>
                                        <img src="/images/message_bubble_white_icon.svg" className="h-4" alt="Comment" onClick={() => commentOnPost()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {confirmWindow &&                      
                        <ConfirmBox
                            userToUnfollow={userToUnfollow}
                            showConfirmWindow={showConfirmWindow}
                            //setProfileData={setProfileData}
                            userName={userInfoState.userInfo.userName}
                        />
                    }
                    {commentWindow &&
                        <CommentBox openCommentWindow={openCommentWindow}/>
                    }
                </div>

            ) : (
                <NewsfeedPage />
            )}
        </div>
    )
}


export default NewsfeedWidget;