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
        <div>
            <div className="absolute text-xl text-white top-4 left-50">
                Profile
            </div>
            <div className="absolute top-10">
                <img src="images/profileImage_EmeraldGreen.webp" className="h-48 w-48 rounded-full"/>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 text-white p-4 pt-80">

                {content.map((contentArray, index) => (
                    <div
                        className="hover:bg-sky-700 text-center rounded-xl relative"
                        key={index}
                        onMouseEnter={() => setContentIndex(index)}
                        onMouseLeave={() => setHoveredDesc(null)}
                    >
                        <img src={contentArray.img} className="h-48 w-full object-cover" alt="Content" />
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