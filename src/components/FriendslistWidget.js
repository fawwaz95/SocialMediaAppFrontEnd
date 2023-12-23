const FriendslistWidget = () => {
    return (
        <div className="p-4 text-white text-sm rounded-md">
           <div className="">Friendslist</div>
           <div className="flex pt-4">
                <img src="/images/coolHouse.webp" className="rounded-full h-20 w-20 mr-4" />
                <div className="flex flex-col justify-center">
                    <div> Charlie Brown </div>
                    <div> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> Friend Icon </div>
           </div>
           <div className="flex pt-4">
                <img src="/images/coolHouse.webp" className="rounded-full h-20 w-20 mr-4" />
                <div className="flex flex-col justify-center">
                    <div> Nick Smith </div>
                    <div> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> Friend Icon </div>
           </div>
           <div className="flex pt-4">
                <img src="/images/coolHouse.webp" className="rounded-full h-20 w-20 mr-4" />
                <div className="flex flex-col justify-center">
                    <div> John Doe </div>
                    <div> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> Friend Icon </div>
           </div>
        </div>
    )
}

export default FriendslistWidget;