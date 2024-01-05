const NewsfeedPage = () => {
    return (
        <div className="pt-20">
                <div className=" text-white text-base">
                    <div id="content" className="flex-col p-4 bg-zinc-900 rounded-md">
                        <div id="contentHeader" className="flex items-center">
                            <div> <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" /> </div>
                            <div className="flex-1 pl-4">
                                <div> John Doe </div>
                                <div className="text-slate-400"> Montreal, QC </div>
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
                                <div> Kevin Mann </div>
                                <div className="text-slate-400"> Los Angelas, CA</div>
                            </div>
                            <div className="flex m-auto justify-between p-2 bg-slate-700 rounded-full">
                                <a href="#" ><img src="images/following_icon.svg" className="h-4"/></a>
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
                                <div> Ricko Rubio </div>
                                <div className="text-slate-400"> Cleveland, OH</div>
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
            </div>
    )
}

export default NewsfeedPage;