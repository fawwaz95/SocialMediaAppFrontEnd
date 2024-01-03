
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostWidget = () => {
    return (
        <div id="postWidget" className="ml-8 text-sm text-white text-base rounded-md bg-zinc-900">
            <div className="flex p-4 border-b border-white">
                <Link to="Profile"><img src="/images/coolHouse.webp" className="rounded-full h-20 w-20 mr-8" /></Link>
                <textarea className="flex place-self-center bg-gray-500 w-full h-1/2 rounded-full pl-4 pt-4" placeholder="Post somthing...." />
           </div>
           <div className="flex justify-between p-4">
                <div> Img Icon </div>
                <div> Video Icon </div>
                <button className="bg-sky-900 pl-8 pr-8 pt-2 pb-2 rounded-full"> Post </button>
           </div>
        </div>
    )
}

export default PostWidget;