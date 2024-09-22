import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileContainerPage = () => {
    const [openImage, setOpenImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [userUploads, setUserUploads] = useState([]);
    const [countFollowing, setCountFollowing] = useState(0);
    const [countFollowers, setCountFollowers] = useState(0);
    const [openFollowingFollowersList, setOpenFollowingFollowersList] = useState(false);
    const userInfoState = useSelector((state) => state.userInfo);

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
        fetchUserUploads();
        fetchFollowing();
    }, []);

    const fetchUserUploads = async () => {
        const response = await fetch(`http://localhost:3001/routes/getAllUserUploads?email=${userInfoState.userInfo.email}`);
        const data = await response.json();
        setUserUploads(data);
    }

    const fetchFollowing  = async () => {
        try {
            const response = await fetch(`http://localhost:3001/routes/getFollowing?user_id=${userInfoState.userInfo.userName}`);
            
            if (!response.ok) {
                console.log("Unable to fetch getFollowing");
                return;
            }
                
            const data = await response.json(); //Must resolve promise before deconstruction
            const { numberOfFollowing, numberOfFollowers } = data.followingFollowersData;

            setCountFollowing(numberOfFollowing);
            setCountFollowers(numberOfFollowers);
        } catch (error) {
            console.error("Error fetching fetchFollowing:", error);
        }
    }

    return (
        <div>
            {
                openImage 
                ? <OpenProfileImg imageUrl={imageUrl} showProfile={showProfile}/> 
                : openFollowingFollowersList
                ? <OpenFollowingFollowersList showProfile={showProfile}/>
                : <Profile 
                    imageUrl={imageUrl} 
                    selectedImage={selectedImage} 
                    userUploads={userUploads} 
                    userInfoState={userInfoState} 
                    countFollowing={countFollowing} 
                    countFollowers={countFollowers} 
                    showFollowingFollowersList={showFollowingFollowersList} 
                  />
            }
        </div>
    )
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
                        <div>
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
                                        <div key={index} onClick={() => selectedImage(arrayItems.url)}>
                                            <img src={arrayItems.url} alt="test" className="h-24 sm:h-48 w-full object-cover" />
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

const OpenFollowingFollowersList = ( {showProfile} ) => {
    const [showFollowingList, setShowFollowingList] = useState(false); // Local hook

    const showAllFollowing = () => {
        setShowFollowingList(true); // Toggle following list
    };

    return (
        <div className="h-screen pt-20 text-white text-xl bg-zinc-900 z-50">
            <a href="#"><img src="images/close_icon.svg" alt="closebtn" className="fixed right-5 h-4 w-auto" onClick={showProfile}/></a>
            <div className="w-full mt-2 grid grid-cols-2 grid-row-1 flex justify-center align-center">
                <div onClick={showAllFollowing}>Following</div>
                <div>Followers</div>
            </div>

            {showFollowingList && <FollowingFollowersList />}
        </div>
    );
};

const FollowingFollowersList = () => {
    return (
        <div class="grid grid-cols-5 grid-rows-2 gap-6 p-4 items-center bg-zinc-800 rounded-lg shadow-md">
            <div class="row-span-2">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    class="h-24 w-24 rounded-full object-cover"
                />
            </div>
            <div class="col-span-3">
                <div class="text-white font-semibold">john_doe</div>
            </div>
            <div class="row-span-2 flex justify-end">
                <button class="px-4 py-2 bg-red-500 text-white rounded-md">Unfollow</button>
            </div>
            <div class="col-span-3">
                <div class="text-gray-400 text-sm">Loving life!</div>
            </div>

        </div>
    );
};

export default ProfileContainerPage;
