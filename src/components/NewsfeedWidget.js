import { useEffect, useState } from 'react';

const NewsfeedWidget = () => {

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className="pt-4 ml-8 text-white text-base">
             <div id="content" className="flex-col p-4 bg-zinc-900 rounded-md">
                <div id="contentHeader" className="flex">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                    <div className="flex m-auto justify-between">
                        <img src="/images/coolHouse.webp" className="h-8"/>
                    </div>
                </div>
                <div id="contentBody">
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pt-4 pb-4"/>
                        <div> Caption </div>
                    </div>
                    <div className="flex">
                        <div className="pr-4"> Like Icon </div>
                        <div> Comment Icon </div>
                    </div>
                </div>
            </div>
            <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                <div id="contentHeader" className="flex">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                    <div className="flex m-auto justify-between">
                        <img src="/images/coolHouse.webp" className="h-8"/>
                    </div>
                </div>
                <div id="contentBody">
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pt-4 pb-4"/>
                        <div> Caption </div>
                    </div>
                    <div className="flex">
                        <div className="pr-4"> Like Icon </div>
                        <div> Comment Icon </div>
                    </div>
                </div>
            </div>
            <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                <div id="contentHeader" className="flex">
                    <div> Profile img </div>
                    <div className="flex-1 pl-4">
                        <div> Username </div>
                        <div> Num of friends </div>
                    </div>
                    <div className="flex m-auto justify-between">
                        <img src="/images/coolHouse.webp" className="h-8"/>
                    </div>
                </div>
                <div id="contentBody">
                    <div className="flex flex-col">   
                        <img src="/images/coolHouse.webp" className="pt-4 pb-4"/>
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