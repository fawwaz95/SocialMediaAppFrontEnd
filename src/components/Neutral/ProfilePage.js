/*Might need to change this to a Neutral component, since it will be used in mobile and desktop views!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

import { useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const userInfoState = useSelector((state) => state.userInfo);
    const [hoveredDesc, setHoveredDesc] = useState(null);
    const [contentIndex, setContentIndex] = useState(null); // Set initial state as null
    const [userUploads, setUserUploads] = useState([]);
    const [activeImage, setActiveImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserUploads();
    }, []);
    
    useEffect(() => {
        /*console.log("Checking userInfoState Profilepage....");
        console.log(userInfoState);
        console.log("Lets see the data.....");
        console.log(userUploads);
        console.log(userUploads.length);*/
        console.log("What is the active image index...." + activeImage);

        if (activeImage !== "" && navigate) {
            console.log("GO TO /OpenProfileImg route");
            navigate("/OpenProfileImg");
        }

    }, [userInfoState, activeImage, navigate]);

    const fetchUserUploads = async () => {
        const response = await fetch(`http://localhost:3001/routes/getAllUserUploads?email=${userInfoState.userInfo.email}`);
        const data = await response.json();

        console.log("USER PROFILE");
        console.log(data);
        setUserUploads(data);
    }

    const selectedImage = (index) => {
        setActiveImage(index);
    }

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
                                <div> 10 </div>
                            </div>
                            <div>
                                Friends
                                <div> 10 </div>
                            </div>
                            <div>
                                Followers
                                <div> 10 </div>
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
                                <img src="images/No_Posts.svg" className="h-24 sm:h-32"/>
                                <p className="flex align-center justify-center text-white text-xl"> {userUploads.message} </p>
                            </div> 
                            :
                            <div className="h-screen bg-zinc-900">
                                <div className="relative grid grid-cols-3 sm:grid-cols-3 gap-4 text-white py-4 pr-10">
                                    {userUploads.map((arrayItems, index) => (
                                        <div className="" key={index} onClick= {()=>selectedImage(index)} >
                                            <img src={arrayItems.url} alt="test" className="h-24 sm:h-48 w-full object-cover"/>
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

export default Profile;