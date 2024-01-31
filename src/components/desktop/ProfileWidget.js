import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileWidget = () => {
    const userInfoState = useSelector((state) => state.userInfo);
    const [editIcon, setEditIcon] = useState(false);

    useEffect(() => {
        console.log("Checking userInfoState ");
        console.log(userInfoState);
    }, [editIcon, userInfoState])

    const clickEditIcon = () => {
        setEditIcon(current => !current);
        console.log("Checking edit " + editIcon);
    }

    //handle redux if its still loading.....create a loading component later..........
    return (
        <div>
            {!userInfoState ?
                <div>
                    Loading.....
                </div> 
                : <div id="profileWidget" className="p-4 text-white text-sm rounded-md">
                    <div className="flex pb-4 border-b">
                        <img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-4" />
                        <div className="flex-1 pl-4">
                            <div>{userInfoState.userInfo.firstName + " " + userInfoState.userInfo.lastName} </div>
                            <div className="text-start text-xs text-slate-400"> 25 Friends</div>
                        </div>
                        <div className="pr-2">
                            <a href="#" onClick={() => clickEditIcon()}><img src="/images/edit_icon.svg" className="h-4 w-4" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4 pb-4 pb-2 border-b">
                        <div className="flex">
                            <div className="pr-4"> <img src="/images/location_icon.svg" className="h-4" /> </div>
                            <div className="text-xs text-slate-400"> Toronto, ON </div>
                        </div>
                        <div className="flex py-2">
                            <div className="pr-4"> <img src="/images/bio_icon.svg" className="h-4" /> </div>
                            <div className="text-start text-xs text-slate-400"> Turn the 6 upside down its a 9 now. Toronto Raptors </div>
                        </div>
                    </div>
                </div>
            }
            {editIcon && (
                <div className="h-auto fixed top-20 left-80 bg-zinc-900 w-1/2 h-1/2 flex justify-center items-center"> {/*adjust so form is in exact center of screen later....*/}
                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 w-96 p-2 text-white text-xs">
                            <div className="self-start">
                                <div className="text-xl text-blue-400 py-4"> Edit Profile </div>
                            </div>
                            <div className="self-start">Username</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" />
                            <div className="self-start">First name</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" />
                            <div className="self-start">Last name</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" />
                            <div className="self-start">Location</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" />
                            <div className="self-start">Bio</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" />
                            <button type="submit" className="w-full my-2 p-2 text-white bg-slate-800 rounded-md"> Done </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )}

export default ProfileWidget;