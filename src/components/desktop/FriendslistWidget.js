import { useEffect, useState } from 'react';

const FriendslistWidget = () => {
    return (
        <div className="p-4 text-white text-xs rounded-md">
           <div className="">Friendslist</div>
           <div className="flex pt-4">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col justify-center">
                    <div> Charlie Brown </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> 
                    <a href="#" ><img src="images/following_icon.svg" className="h-4"/></a>
                 </div>
           </div>
           <div className="flex pt-4">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col justify-center">
                    <div> Nick Smith </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> 
                    <a href="#" ><img src="images/following_icon.svg" className="h-4"/></a>
                 </div>
           </div>
           <div className="flex pt-4">
                <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                <div className="flex flex-col justify-center">
                    <div> John Doe </div>
                    <div className="text-slate-400"> Short Bio </div>
                </div>
                <div className="ml-auto flex items-center"> 
                    <a href="#" ><img src="images/following_icon.svg" className="h-4"/></a>
                 </div>
           </div>
        </div>
    )
}

export default FriendslistWidget;