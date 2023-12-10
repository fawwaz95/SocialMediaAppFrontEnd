import { useEffect, useState } from 'react';

const Explore = () => {
    const [hoveredDesc, setHoveredDesc] = useState(null);
    const [contentIndex, setContentIndex] = useState(null); // Set initial state as null

    const content = [
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Description One",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Description Two",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Explore Desc",
        },
        {
            img: "images/explore.webp",
            user: "user",
            desc: "Description last",
        },
    ];


    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 text-white p-4 pt-20">
            <div className="absolute text-xl top-10 left-4">
                Explore Feed
            </div>
            {content.map((contentArray, index) => (
                <div
                    className="hover:bg-sky-700 text-center rounded-xl relative"
                    key={index}
                    onMouseEnter={() => setContentIndex(index)}
                    onMouseLeave={() => setHoveredDesc(null)}
                >
                    <img src={contentArray.img} className="h-48 w-full object-cover" alt="Content" />
                    {contentIndex !== null && contentIndex === index &&  (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div>{contentArray.desc}</div>
                        </div>
                    )}
                     <div className="flex justify-between w-full p-2"> {/*absolute bottom-0*/}
                        <div className="flex items-center">
                            <a href="#">
                                <img src="images/user_icon.svg" className="h-5 w-5 mr-2" alt="User img" />
                            </a>
                            <a href="#">
                                <div>{contentArray.user}</div>
                            </a>
                        </div>
                        <div className="flex items-end">
                            <a href="#">
                                <img src="images/heart_icon.svg" className="h-5 w-5 mr-2" alt="Heart img" />
                            </a>
                            <a href="#">
                                <img src="images/saved_icon.svg" className="h-5 w-5" alt="Save img" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Explore;