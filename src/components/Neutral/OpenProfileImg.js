import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const OpenProfileImg = ({img}) => {
    //const location = useLocation();
    //const state = location.state;

    useEffect(()=>{
        console.log("Opening profile image...");
        console.log(`Image source: ${img}`);
    });

    return (
        <div className="h-screen pt-20 flex align-center justify-center text-green text-xl bg-zinc-900 z-50">
            <img src={img} alt="profile_image" className="p-10" />
        </div>
    )
}

export default OpenProfileImg;

