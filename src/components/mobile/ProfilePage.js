import { useEffect, useState } from 'react';

const Profile = () => {
    const [hoveredDesc, setHoveredDesc] = useState(null);
    const [contentIndex, setContentIndex] = useState(null); // Set initial state as null

    const content = [
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
    ];

    return (
        <div className="pl-10">
            <div className="text-xl text-white pt-10 pl-4">
                Profile
            </div>
            <div className="flex flex-wrap justify-between pt-10 pr-20 pb-4 text-white"> {/*pt-4 pb-8 pr-12*/}
                <img src="images/profile_image.jpg" className="h-24 w-24 sm:h-40 sm:w-40 rounded-full"/>
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
                User Name
            </div>
            <div className="relative grid grid-cols-3 sm:grid-cols-3 gap-4 text-white py-4 pr-10"> {/*pt-80*/}

                {content.map((contentArray, index) => (
                    <div
                        className="hover:bg-sky-700 text-center rounded-xl relative"
                        key={index}
                        onMouseEnter={() => setContentIndex(index)}
                        onMouseLeave={() => setHoveredDesc(null)}
                    >
                        <img src={contentArray.img} className="h-24 sm:h-48 w-full object-cover" alt="Content"/>
                        {contentIndex !== null && contentIndex === index && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div>{contentArray.desc}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Profile;