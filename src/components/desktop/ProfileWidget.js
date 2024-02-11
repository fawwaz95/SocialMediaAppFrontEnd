import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

const ProfileWidget = () => {
    const userInfoState = useSelector((state) => state.userInfo);

    useEffect(() => {
        console.log("Heres state changes......");
        console.log(userInfoState);
    }, [userInfoState])

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
                            <div className="text-start text-xs text-slate-400"> {userInfoState.userInfo.friends ? userInfoState.userInfo.friends + " Friends" : ""}</div>
                        </div>
                        <div className="pr-2">
                            <Link to="/EditProfile"><img src="/images/edit_icon.svg" className="h-4 w-4" /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4 pb-4 pb-2 border-b">
                        <div className="flex">
                            <div className="pr-4"> <img src="/images/location_icon.svg" className="h-4" /> </div>
                            <div className="text-xs text-slate-400"> {userInfoState.userInfo.location ? userInfoState.userInfo.location : ""} </div>
                        </div>
                        <div className="flex py-2">
                            <div className="pr-4"> <img src="/images/bio_icon.svg" className="h-4" /> </div>
                            <div className="text-start text-xs text-slate-400"> {userInfoState.userInfo.bio ? userInfoState.userInfo.bio : ""} </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )}

export default ProfileWidget;