import { useEffect, useState } from 'react';

const ProfileWidget = () => {
    return (
        <div id="profileWidget" className="p-4 text-white text-sm rounded-md">
            <div className="flex pb-4 border-b">
                <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" />
                <div className="flex-1 pl-4">
                    <div> RJ Barrett </div>
                    <div className="text-start text-xs text-slate-400"> 25 Friends</div>
                </div>
            </div>
            <div className="flex flex-col pt-4 pb-4 pb-2 border-b">
                <div className="flex">
                    <div className="pr-4"> <img src="/images/location_icon.svg" className="h-4"/> </div>
                    <div className="text-xs text-slate-400"> Toronto, ON </div>
                </div>
                <div className="flex py-2">
                    <div className="pr-4"> <img src="/images/bio_icon.svg" className="h-6"/> </div>
                    <div className="text-start text-xs text-slate-400"> Turn the 6 upside down its a 9 now. Toronto Raptors </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileWidget;