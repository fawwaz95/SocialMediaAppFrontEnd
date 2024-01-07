
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostWidget = () => {
    return (
        <div id="postWidget" className="ml-8 text-sm text-white text-base rounded-md bg-zinc-900">
            <div className="flex p-4 border-b border-white">
                <Link to="Profile"><img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-8" /></Link>
                <textarea className="flex place-self-center bg-gray-500 w-full h-1/2 rounded-full pl-4 pt-4" placeholder="Post somthing...." />
           </div>
           <div className="flex justify-between p-4">
                <div className="flex items-center">
                    <a href="#"> <img src="/images/camera_icon.svg" className="h-8 pr-2" /> </a>
                    <div>Camera</div>
                </div>
                <div className="flex items-center">
                    <a href="#"> <img src="/images/upload_icon.svg" className="h-8 pr-2" /> </a>
                    <div>Upload</div>
                </div>
                <button className="bg-sky-900 pl-8 pr-8 py-2 rounded-full"> Post </button>
           </div>
        </div>
    )
}

export default PostWidget;