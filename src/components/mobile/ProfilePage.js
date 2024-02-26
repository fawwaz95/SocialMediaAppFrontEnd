import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const userInfoState = useSelector((state) => state.userInfo);
    const [hoveredDesc, setHoveredDesc] = useState(null);
    const [contentIndex, setContentIndex] = useState(null); // Set initial state as null
    const [userImg, setUserImg] = useState({});

    useEffect(() => {
        fetchUserUploads();
        console.log("Checking userInfoState Profilepage....");
        console.log(userInfoState);
    }, [userInfoState])

    /*const content = [
        {
            img: "images/saved_SpikeLee.png",
            desc: "Description One",
        },
        {
            img: "images/saved_TorontoBasketballCourt.jpg",
            desc: "Description Two",
        },
        {
            img: "images/saved_AimeShirt.webp",
            desc: "Description",
        },
        {
            img: "images/saved_SpikeLee.png",
            desc: "Description One",
        },
        {
            img: "images/saved_TorontoBasketballCourt.jpg",
            desc: "Description Two",
        },
        {
            img: "images/saved_AimeShirt.webp",
            desc: "Description",
        },
        {
            img: "images/saved_SpikeLee.png",
            desc: "Description One",
        },
        {
            img: "images/saved_TorontoBasketballCourt.jpg",
            desc: "Description Two",
        },
        {
            img: "images/saved_AimeShirt.webp",
            desc: "Description",
        },
        {
            img: "images/saved_SpikeLee.png",
            desc: "Description One",
        },
        {
            img: "images/saved_TorontoBasketballCourt.jpg",
            desc: "Description Two",
        },
        {
            img: "images/saved_AimeShirt.webp",
            desc: "Description",
        },
    ];*/

    const fetchUserUploads = async () => {
        const response = await fetch(`http://localhost:3001/routes/getUserUploads?email=${userInfoState.userInfo.email}`);
        const data = await response.json();

        console.log("USER UPLOAD PIC FRONT END");
        console.log(data);
        setUserImg({url: data.url});
    }

    return (
        <div className="pl-10">
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
                        <div className="text-white text-center w-40">
                            {userInfoState.userInfo.firstName + " " + userInfoState.userInfo.lastName}
                        </div>
                        <div className="relative grid grid-cols-3 sm:grid-cols-3 gap-4 text-white py-4 pr-10"> {/*pt-80*/}

                                <div className="hover:bg-sky-700 text-center rounded-xl relative">
                                    <img src={userImg.url} alt=""  className="h-24 sm:h-48 w-full object-cover"/>
                                </div>







                            { /*{content.map((contentArray, index) => (
                                <div
                                    className="hover:bg-sky-700 text-center rounded-xl relative"
                                    key={index}
                                    onMouseEnter={() => setContentIndex(index)}
                                    onMouseLeave={() => setHoveredDesc(null)}
                                >
                                    <img src={contentArray.img} className="h-24 sm:h-48 w-full object-cover" alt="Content" />
                                    {contentIndex !== null && contentIndex === index && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div>{contentArray.desc}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                                    */}
                        </div>
                    </div>
            }
        </div>

    )
}

export default Profile;