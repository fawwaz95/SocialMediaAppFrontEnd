import { useEffect, useState, useContext } from 'react';
import { useIsMobile } from '../../contexts/MobileContext';

import NewsfeedPage from '../Mobile/NewsfeedPage';

const NewsfeedWidget = () => {
    const isMobile = useIsMobile();

    return (
        <div>
            {!isMobile ? (
                <div className="py-4 ml-8 text-white text-xs">
                    <div id="content" className="flex-col p-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> Immanuel Quickley </div>
                                <div className="text-slate-400"> Toronto, ON</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-5"/></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col">
                                <img src="/images/coolHouse.webp" className="pt-4 pb-4" />
                                <div> Caption </div>
                            </div>
                            <div className="flex">
                                <div className="pr-4"> Like Icon </div>
                                <div> Comment Icon </div>
                            </div>
                        </div>
                    </div>
                    <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> Kevin Hart </div>
                                <div className="text-slate-400"> Philadelphia, PEN</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-6"/></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col">
                                <img src="/images/coolHouse.webp" className="pt-4 pb-4" />
                                <div> Caption </div>
                            </div>
                            <div className="flex">
                                <div className="pr-4"> Like Icon </div>
                                <div> Comment Icon </div>
                            </div>
                        </div>
                    </div>
                    <div id="content" className="flex-col p-4 mt-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> John Doe </div>
                                <div className="text-slate-400"> San Fransico, CA</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-5"/></a>
                            </div>
                        </div>
                        <div id="contentBody">
                            <div className="flex flex-col">
                                <img src="/images/coolHouse.webp" className="pt-4 pb-4" />
                                <div> Caption </div>
                            </div>
                            <div className="flex">
                                <div className="pr-4"> Like Icon </div>
                                <div> Comment Icon </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <NewsfeedPage />
            )}
        </div>
    )
}


export default NewsfeedWidget;