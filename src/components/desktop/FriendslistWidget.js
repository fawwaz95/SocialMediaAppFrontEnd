import { useEffect, useState } from 'react';

const FriendslistWidget = () => {
    return (
        <div className="p-4 text-white text-xs rounded-md">
           <div className="">Friendslist</div>
           <div className="flex pt-4 justify-between items-center">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col ">
                    <div> Charlie Brown </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="flex items-center p-2 bg-slate-700 rounded-full"> 
                    <a href="#" ><img src="images/following_icon.svg" className="h-5"/></a>
                 </div>
           </div>
           <div className="flex pt-4 justify-between items-center">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col">
                    <div> Nick Smith </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="flex items-center p-2 bg-slate-700 rounded-full"> 
                    <a href="#" ><img src="images/following_icon.svg" className="h-5"/></a>
                 </div>
           </div>
           <div className="flex pt-4 justify-between items-center">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col">
                    <div> John Doe </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="flex p-2 bg-slate-700 rounded-full">
                        <a href="#" ><img src="images/following_icon.svg" className="h-5 self-end"/></a>
                </div>
           </div>
        </div>
    )
}

export default FriendslistWidget;