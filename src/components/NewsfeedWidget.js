import { useEffect, useState } from 'react';

const NewsfeedWidget = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className="ml-8 text-white text-base">
             <div id="Content" className="flex-col pl-4 pr-4 bg-gray-800 rounded-md">
                <div className="flex">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pr-2"/>
                        <div> Caption </div>
                    </div>
                    <div className="flex">
                        <div className="pr-4"> Like Icon </div>
                        <div> Comment Icon </div>
                    </div>
                </div>
            </div>
            <div id="Content" className="flex-col pl-4 pr-4 mt-4 bg-gray-800 rounded-md">
                <div className="flex">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pr-2"/>
                        <div> Caption </div>
                    </div>
                    <div className="flex">
                        <div className="pr-4"> Like Icon </div>
                        <div> Comment Icon </div>
                    </div>
                </div>
            </div>
            <div id="Content" className="flex-col pl-4 pr-4 mt-4 bg-gray-800 rounded-md">
                <div className="flex border-b border-white">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                </div>
                <div className="border-b border-white">
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pr-2"/>
                        <div> Caption </div>
                    </div>
                    <div className="flex">
                        <div className="pr-4"> Like Icon </div>
                        <div> Comment Icon </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsfeedWidget;