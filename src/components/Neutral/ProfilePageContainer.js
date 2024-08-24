import { useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';

const ProfileContainerPage = () => {
    const [openImage, setOpenImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [userUploads, setUserUploads] = useState([]);
    const [countFollowing, setCountFollowing] = useState(0);
    const [countFollowers, setCountFollowers] = useState(0);
    const userInfoState = useSelector((state) => state.userInfo);

    const selectedImage = (url) => {
        setImageUrl(url);
        setOpenImage(true);
    };

    const showProfile = () => {
        setOpenImage(false);
    }

    useEffect(() => {
        console.log("CONTAINERRRRRRRRRR");
        console.log(userInfoState);
        fetchUserUploads();
        fetchFollowing();
    }, []);

    const fetchUserUploads = async () => {
        const response = await fetch(`http://localhost:3001/routes/getAllUserUploads?email=${userInfoState.userInfo.email}`);
        const data = await response.json();

        console.log("USER PROFILE ");
        console.log(data);
        setUserUploads(data);
    }

    const fetchFollowing  = async () => {
        console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        try {
            const response = await fetch(`http://localhost:3001/routes/getFollowing?user_id=${userInfoState.userInfo.userName}`);
            
            if (!response.ok) {
                console.log("Unable to fetch getFollowing");
                return;
            }
                
            const data = await response.json(); //Must resolve promise before deconstruction
            const { numberOfFollowing, numberOfFollowers } = data.followingFollowersData;

            console.log("number of following");
            console.log(numberOfFollowing);

            console.log("number of followers");
            console.log(numberOfFollowers);

            setCountFollowing(numberOfFollowing);
            setCountFollowers(numberOfFollowers);
        } catch (error) {
            console.error("Error fetching fetchFollowing:", error);
        }
    }

    return (
        <div>
            {
                openImage ?
                <OpenProfileImg imageUrl={imageUrl} showProfile={showProfile}/> : 
                <Profile imageUrl={imageUrl} selectedImage={selectedImage} userUploads={userUploads} userInfoState={userInfoState} countFollowing={countFollowing} countFollowers={countFollowers}/>
            }
        </div>
    )
}

    const Profile = ( {selectedImage, userUploads, userInfoState, countFollowing, countFollowers } ) => {
        
        return (
            <div className="pl-10 overflow-y-auto">
                {
                    !userInfoState ?
                        <div>
                            Loading...............
                        </div>
                        :
                        <div>
                            <div className="text-xl text-white pt-10 pl-4">
                                Profile
                            </div>
                            <div className="flex flex-wrap justify-between pt-10 pr-20 pb-4 text-white"> {/*pt-4 pb-8 pr-12*/}
                                <img src="images/profile_image.jpg" className="h-24 w-24 sm:h-40 sm:w-40 rounded-full" />
                                <div>
                                    Posts
                                    <div> {userUploads.length} </div>
                                </div>
                                <div>
                                    Following
                                    <div> {countFollowing} </div>
                                </div>
                                <div>
                                    Followers
                                    <div> {countFollowers} </div>
                                </div>
                            </div>
                            <div className="text-white text-center w-40 font-bold">
                                {userInfoState.userInfo.firstName + " " + userInfoState.userInfo.lastName}
                            </div>
                            <div className="text-white text-center w-40">
                                {userInfoState.userInfo.bio}
                            </div>
                            <div className="h-screen">
                                {
                                    userUploads && userUploads.message ?
                                        <div className="flex flex-col align-center justify-center">
                                            <img src="images/No_Posts.svg" className="h-24 sm:h-32" />
                                            <p className="flex align-center justify-center text-white text-xl"> {userUploads.message} </p>
                                        </div>
                                        :
                                        <div className="h-screen">
                                            <div className="relative grid grid-cols-3 sm:grid-cols-3 gap-4 text-white py-4 pr-10">
                                                {userUploads.map((arrayItems, index) => (
                                                    <div className="" key={index} onClick={() => selectedImage(arrayItems.url)} >
                                                        <img src={arrayItems.url} alt="test" className="h-24 sm:h-48 w-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                }
            </div>
        )
    }

    const OpenProfileImg = ({imageUrl, showProfile}) => {
        return (
            <div className="h-screen pt-20 flex align-center justify-center text-green text-xl bg-zinc-900 z-50">
                <a href="#"><img src="images/close_icon.svg" alt="closebtn" className="fixed right-5 h-4 w-auto" onClick={showProfile}/></a>
                <img src={imageUrl} alt="profile_image" className="p-10" />
            </div>
        )
    }

export default ProfileContainerPage;