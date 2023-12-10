import { useEffect, useState } from 'react';

const Followers = () => {
    const [isRemove, setIsRemove] = useState(false);
    const [userIndex, setUserIndex] = useState(null);
    
    const content = [
        {
            profileImg: "images/profileImage_Beige.png",
            userName: "Gerald",
        },
        {
            profileImg: "images/profileImage_Blue.png",
            userName: "Kent",
        },
        {
            profileImg: "images/profileImage_EmeraldGreen.webp",
            userName: "Michael",
        },
        {
            profileImg: "images/profileImage_Beige.png",
            userName: "Gerald",
        },
        {
            profileImg: "images/profileImage_Blue.png",
            userName: "Kent",
        },
        {
            profileImg: "images/profileImage_EmeraldGreen.webp",
            userName: "Michael",
        },
        {
            profileImg: "images/profileImage_Beige.png",
            userName: "Gerald",
        },
        {
            profileImg: "images/profileImage_Blue.png",
            userName: "Kent",
        },
        {
            profileImg: "images/profileImage_EmeraldGreen.webp",
            userName: "Michael",
        },
        {
            profileImg: "images/profileImage_Beige.png",
            userName: "Gerald",
        },
        {
            profileImg: "images/profileImage_Blue.png",
            userName: "Kent",
        },
        {
            profileImg: "images/profileImage_EmeraldGreen.webp",
            userName: "Michael",
        },
    ];

    const changeFollowerStatus = (current, index) => {
        setIsRemove(current => !current);
        setUserIndex(index);
    } 

    useEffect(() => {
        return () => {

        };
    }, []);

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 text-white p-4 pt-20">
            <div className="absolute text-xl top-10 left-4">
                Followers
            </div>
            {content.map((contentArray, index) => (
                <div className="hover:bg-sky-700 text-center rounded-xl relative flex justify-center items-center h-64"key={index}>
                    <img src={contentArray.profileImg} className="h-24 w-auto rounded-full" alt="Content" />
                    <div className="absolute bottom-8 left-50 pb-4"> {contentArray.userName} </div>
                        <button className="absolute bottom-0 left-50 rounded-lg pl-4 pr-4 pt-1 pb-1 bg-slate-600 hover:bg-slate-400" onClick={() => {changeFollowerStatus(isRemove, index)}}> 
                            {!isRemove && userIndex === index ? <p>Follow</p> : <p>Remove</p>}
                        </button>                          
                </div>
            ))}
        </div>
    )
}

export default Followers;