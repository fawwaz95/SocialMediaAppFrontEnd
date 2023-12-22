import { useEffect, useState } from 'react';

const ProfileWidget = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div id="profileWidget" className="ml-4 p-4 text-white text-base bg-gray-500 rounded-md">
            <div className="flex border-b pb-4 border-white">
                <div> Profile img </div>
                <div className="flex-1 pl-4">
                    <div> Username </div>
                    <div> Num of friends </div>
                </div>
            </div>
            <div className="flex flex-col pt-4 pb-4 border-b pb-2 border-white">
                <div className="flex">
                    <div className="pr-4"> Location Icon</div>
                    <div> Location </div>
                </div>
                <div className="flex">
                    <div className="pr-4"> Bio Icon </div>
                    <div> Bio </div>
                </div>
            </div>
            <div className="pt-4 pb-4">
                <div> Social media </div>
                <div> Social media </div>
            </div>
        </div>
    )
}

export default ProfileWidget;