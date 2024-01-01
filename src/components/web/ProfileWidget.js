import { useEffect, useState } from 'react';

const ProfileWidget = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div id="profileWidget" className="p-4 text-white text-sm rounded-md">
            <div className="flex pb-4 border-b">
                <img src="/images/coolHouse.webp" className="rounded-full h-20 w-20 mr-4" />
                <div className="flex-1 pl-4">
                    <div> RJ Barrett </div>
                    <div> 25 </div>
                </div>
            </div>
            <div className="flex flex-col pt-4 pb-4 pb-2 border-b">
                <div className="flex">
                    <div className="pr-4"> Location Icon</div>
                    <div> Toronto, ON </div>
                </div>
                <div className="flex">
                    <div className="pr-4"> Bio Icon </div>
                    <div> Turn the 6 upside down its a 9 now. Toronto Raptors </div>
                </div>
            </div>
            <div className="pt-4 pb-4">
                <div> Instagram Icon </div>
                <div> Twitter Icon </div>
            </div>
        </div>
    )
}

export default ProfileWidget;