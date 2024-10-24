import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ConfirmBox from '../WindowPopups/ConfirmBox';

const ProfileContainerPage = () => {
    const [openImage, setOpenImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [profileData, setProfileData] = useState({
        userUploads: [],
        following: [],
        followers: []
    });
    const [isFollowingListOpen, setOpenFollowingFollowersList] = useState(false);
    const userInfoState = useSelector((state) => state.userInfo);
    const { userName, isUserProfileClicked } = useParams();

    const selectedImage = (url) => {
        setImageUrl(url);
        setOpenImage(true);
    };

    const showProfile = () => {
        setOpenImage(false);
        setOpenFollowingFollowersList(false);
    }

    const showFollowingFollowersList = () => {
        setOpenFollowingFollowersList(true);
    }

    useEffect(() => {
        const fetchAllData = async () => {
            await fetchUserUploads();
            await fetchFollowingFollowers();
        };

        if(isUserProfileClicked){
            console.log("Clicked newsfeed user......." + userName);
        }else{
            console.log("Hello current profile user....." + userInfoState.userInfo.userName);
        }
        
        fetchAllData();
    }, [userName, isUserProfileClicked]);


    const fetchUserUploads = async () => {
        const response = await fetch(`http://localhost:3001/routes/getAllUserUploads?email=${userInfoState.userInfo.email}`);
        const data = await response.json();
    
        setProfileData(prev => ({
            ...prev, //...prev means save the previous state in a new object for a reference
            userUploads: [  //userUploads is the userUplaods array within the setProfileData hook
                ...prev.userUploads, //...prev means take existing state of useruploads and spread/save into a new array
                ...data.map(item => item.url) //...data append all new urls into existing userUploads array
            ]
        }));
    };

    const fetchFollowingFollowers = async () => {
        try {
            const response = await fetch(`http://localhost:3001/routes/getFollowingFollowers?user_id=${userInfoState.userInfo.userName}`);
            
            if (!response.ok) throw new Error("Failed to fetch following/followers");
            
            const data = await response.json();

            if(data.success === false){
                setProfileData(prev => ({
                    ...prev,
                    following: [],
                    followers: []
                }));
            }else{
                setProfileData(prev => ({
                    ...prev,
                    following: data.followingFollowersData.following,
                    followers: data.followingFollowersData.followers
                }));
            }
        

        } catch (error) {
            console.error(error);
            console.log("Current user doesnt have any following/follower users");
        }
    };
    
    const renderContent = () => {
        if (openImage) return <OpenProfileImg imageUrl={imageUrl} showProfile={showProfile} />;
        if (isFollowingListOpen) return <OpenFollowingFollowersList showProfile={showProfile} setProfileData={setProfileData} userName={userInfoState.userInfo.userName} followingUsers={profileData.following} followersUsers={profileData.followers} />;
        return <Profile 
                    imageUrl={imageUrl} 
                    selectedImage={selectedImage} 
                    userUploads={profileData.userUploads} 
                    userInfoState={userInfoState} 
                    countFollowing={profileData.following.length} 
                    countFollowers={profileData.followers.length} 
                    showFollowingFollowersList={showFollowingFollowersList} 
                />;
    };
    
    return <div>{renderContent()}</div>;
    
}

const Profile = ({ selectedImage, userUploads, userInfoState, countFollowing, countFollowers, showFollowingFollowersList }) => {
    return (
        <div className="pl-10 overflow-y-auto">
            {!userInfoState ? (
                <div>Loading............... </div>
            ) : (
                <div>
                    <div className="text-xl text-white pt-10 pl-4">Profile</div>
                    <div className="flex flex-wrap justify-between pt-10 pr-20 pb-4 text-white">
                        <img src="images/profile_image.jpg" className="h-24 w-24 sm:h-40 sm:w-40 rounded-full" />
                        <div>
                            Posts
                            <div>{userUploads.length}</div>
                        </div>
                        <div onClick={showFollowingFollowersList}>
                            Following
                            <div>{countFollowing}</div>
                        </div>
                        <div onClick={showFollowingFollowersList}>
                            Followers
                            <div>{countFollowers}</div>
                        </div>
                    </div>
                    <div className="text-white text-center w-40 font-bold">
                        {userInfoState.userInfo.firstName + " " + userInfoState.userInfo.lastName}
                    </div>
                    <div className="text-white text-center w-40">{userInfoState.userInfo.bio}</div>
                    <div className="h-screen">
                        {userUploads && userUploads.message ? (
                            <div className="flex flex-col align-center justify-center">
                                <img src="images/No_Posts.svg" className="h-24 sm:h-32" />
                                <p className="flex align-center justify-center text-white text-xl">
                                    {userUploads.message}
                                </p>
                            </div>
                        ) : (
                            <div className="h-screen">
                                <div className="relative grid grid-cols-3 sm:grid-cols-3 gap-4 text-white py-4 pr-10">
                                    {userUploads.map((arrayItems, index) => (
                                        <div key={index} onClick={() => selectedImage(arrayItems)}>
                                            <img src={arrayItems} alt="test" className="h-24 sm:h-48 w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const OpenProfileImg = ({ imageUrl, showProfile }) => {
    return (
        <div className="h-screen pt-20 flex align-center justify-center text-green text-xl bg-zinc-900 z-50">
            <a href="#"><img src="images/close_icon.svg" alt="closebtn" className="fixed right-5 h-4 w-auto" onClick={showProfile}/></a>
            <img src={imageUrl} alt="profile_image" className="p-10" />
        </div>
    )
}

const OpenFollowingFollowersList = ( {showProfile, setProfileData, userName, followingUsers, followersUsers} ) => {
    const [showFollowingList, setShowFollowingList] = useState(false);
    const [showFollowersList, setShowFollowersList] = useState(false);

    const showAllFollowing = () => {
        setShowFollowersList(false);
        setShowFollowingList(current => !current);
    };

    const showAllFollowers = () => {
        setShowFollowingList(false);
        setShowFollowersList(current => !current);
    }

    return (
        <div className="h-screen pt-20 text-white text-xl bg-zinc-900 z-50">
            <a href="#"><img src="images/close_icon.svg" alt="closebtn" className="fixed right-5 h-4 w-auto" onClick={showProfile}/></a>
            <div className="w-full mt-2 mb-2 grid grid-cols-2 grid-row-1 flex justify-center align-center">
                <div className={showFollowingList && "border-b-2 w-24"} onClick={() => showAllFollowing()}>Following</div>
                <div className={showFollowersList && "border-b-2 w-24"} onClick={() => showAllFollowers()}>Followers</div>
            </div>

            {showFollowingList && <FollowingList setProfileData={setProfileData} userName={userName} followingUsers={followingUsers} />}
            {showFollowersList && <FollowersList userName={userName} followersUsers={followersUsers} setProfileData={setProfileData}/>}
        </div>
    );
};

const FollowingList = ({ setProfileData, userName, followingUsers }) => {
    const [confirmWindow, showConfirmWindow] = useState(false);
    const [userToUnfollow, setUserToUnfollow] = useState(null);

    const handleUnFollowUser = (user) => {
        setUserToUnfollow(user);
        showConfirmWindow(true);
    };

    return (
        <div>
            {followingUsers && followingUsers.map((user) => (
                <div key={user} className="w-full grid grid-cols-4 grid-rows-2 gap-6 p-4 items-center bg-zinc-800 rounded-lg shadow-md">  
                    <div className="row-span-2">
                        <img 
                            src="https://via.placeholder.com/150" 
                            alt="Profile" 
                            className="h-24 w-24 rounded-full object-cover"
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="text-white font-semibold">{user}</div>
                    </div>
                    <div className="row-span-2 flex justify-end">
                        <button 
                            className="px-4 py-2 bg-red-500 text-white rounded-md" 
                            onClick={() => handleUnFollowUser(user)}
                        >
                            Unfollow
                        </button>
                    </div>

                    {confirmWindow && (
                        <ConfirmBox
                            userToUnfollow={userToUnfollow}
                            showConfirmWindow={showConfirmWindow}
                            setProfileData={setProfileData}
                            userName={userName}
                        />
                    )}

                    <div className="col-span-2">
                        <div className="text-gray-400 text-sm">Loving life!</div>
                    </div>                    
                </div>
            ))}
        </div>
    );
};


const FollowersList = ( { userName, followersUsers, setProfileData }) => {
    const [confirmWindow, showConfirmWindow] = useState(false);
    const [userToRemove, setUserToRemove] = useState(null);

    const setRemoveUser = (user) =>{
        console.log("setRemoveUser invoked....");
        setUserToRemove(user);
        showConfirmWindow(true);
    }
    return (
        <div>
            {followersUsers && followersUsers.map((follower) => (
                <div key={follower} className="w-full grid grid-cols-4 grid-rows-2 gap-6 p-4 items-center bg-zinc-800 rounded-lg shadow-md">  
                    <div className="row-span-2">
                        <img 
                            src="https://via.placeholder.com/150" 
                            alt="Profile" 
                            className="h-24 w-24 rounded-full object-cover"
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="text-white font-semibold">{follower}</div>
                    </div>
                    <div className="row-span-2 flex justify-end">
                        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setRemoveUser(follower)}>
                            Remove
                        </button>
                    </div>
                    <div className="col-span-2">
                        <div className="text-gray-400 text-sm">I'm a Follower!</div>
                    </div>                    
                </div>
            ))}

            {confirmWindow && (
                         <ConfirmBox
                         userToRemove={userToRemove}                         
                         showConfirmWindow={showConfirmWindow}
                         setProfileData={setProfileData}
                         userName={userName}
                         />
            )}
        </div>
    );
};

export default ProfileContainerPage;
