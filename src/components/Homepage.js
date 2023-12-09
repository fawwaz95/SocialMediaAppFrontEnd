const Homepage = () => {
    const content = [
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
        {
            img: "images/coolHouse.webp",
            user: "user",    
        },
    ];
    
    return(
        <div className="grid grid-cols-3 gap-4 text-white w-5/6 p-4">
            {content.map(contentArray => (
                <div className="hover:bg-sky-700 text-center rounded-xl relative">
                    <img src={contentArray.img} className="h-full" alt="Content" />
                        <div className="absolute bottom-0 flex justify-between w-full p-2">
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

export default Homepage;