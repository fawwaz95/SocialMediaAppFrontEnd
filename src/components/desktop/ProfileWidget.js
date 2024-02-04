import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginUser} from '../../actions/loginAction';

const ProfileWidget = () => {
    const userInfoState = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();
    const [editIcon, setEditIcon] = useState(false);
    const [profileData, setProfileData] = useState({});
    const inpUserNameRef = useRef();
    const inpFirstNameRef = useRef();
    const inpLastNameRef = useRef();
    const inpLocationRef = useRef();
    const inpBioRef = useRef();
    const btnDoneRef = useRef();

    useEffect(() => {
        console.log("Heres state changes......");
        console.log(userInfoState);

        if(editIcon){
            console.log("Fetching inital user Profile data.....");
            setEventListeners();
            console.log("Passing username like this: " + userInfoState.userInfo.userName);
            fetchUserProfile();
        }
    }, [editIcon, userInfoState])

    const clickEditIcon = () => {
        setEditIcon(current => !current);
    }

    const handleKeyDown = async (event) => {
        if (event.key === "Enter"){
            event.preventDefault();
            console.log(event.key);
            await editProfile();
            clickEditIcon();
        }
    }

    const handleClick = async (event) => {
        event.preventDefault();
        console.log("Clicked done");
        await editProfile();
        clickEditIcon();
    }

    const fetchUserProfile = async () => {
        try{
            const response = await fetch(`http://localhost:3001/routes/getProfile/userName?userName=${userInfoState.userInfo.userName}`);

            /*if(!response.ok){
                throw(`Http error in fetchUserProfile ${response.status}`);
            }*/
    
            const data = await response.json();
            console.log("The fetch user profile data.....");
            console.log(data);
            setProfileData(data);
        }catch(error){
            console.log("Heres the error fetchUserProfile....handle it " + error);
            console.log(error);
        }
   
    }

    const editProfile = async () => {
        try{
            const postMethod = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    findUser: userInfoState.userInfo.userName,
                    userName: inpUserNameRef.current.value ? inpUserNameRef.current.value : userInfoState.userInfo.userName,
                    firstName: inpFirstNameRef.current.value ? inpFirstNameRef.current.value : userInfoState.userInfo.firstName,
                    lastName: inpLastNameRef.current.value ? inpLastNameRef.current.value : userInfoState.userInfo.lastName,
                    location: inpLocationRef.current.value,
                    bio: inpBioRef.current.value,
                })
            };
    
            const response = await fetch("http://localhost:3001/routes/editProfile", postMethod);
    
            /*if(!response.ok){
                throw("Http error in editProfile " + response.status);
            }*/
    
            const data = await response.json();
            console.log("EDIT PROFILE WORKED");
            console.log(data);
            dispatch(loginUser(data))
        }catch(error){
            console.log("Heres the error editProfile....handle it " + error);
            console.log(error);
        }

    }

    const setEventListeners = () => {
        inpUserNameRef.current.addEventListener("keydown", handleKeyDown);
        inpFirstNameRef.current.addEventListener("keydown", handleKeyDown);
        inpLastNameRef.current.addEventListener("keydown", handleKeyDown);
        inpLocationRef.current.addEventListener("keydown", handleKeyDown);
        inpBioRef.current.addEventListener("keydown", handleKeyDown);
        btnDoneRef.current.addEventListener("click", handleClick);
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
                            <div className="text-start text-xs text-slate-400"> {userInfoState.userInfo.friends ? userInfoState.userInfo.friends + " Friends" : ""}</div>
                        </div>
                        <div className="pr-2">
                            <a href="#" onClick={() => clickEditIcon()}><img src="/images/edit_icon.svg" className="h-4 w-4" /></a>
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
            {/*Create a seperate popup component later..........*/}
            {editIcon && (
                <div className="h-auto fixed top-20 left-80 bg-zinc-500 w-1/2 h-1/2 flex justify-center items-center rounded-md" > {/*adjust so form is in exact center of screen later....*/}
                    <div>
                        <div className="flex flex-col items-center justify-center gap-2 w-96 p-2 text-white text-xs">
                            <div className="self-start">
                                <div className="text-xl text-blue-400 py-4"> Edit Profile </div>
                            </div>

                            <div> {profileData.success === false && profileData.message}</div>
                            <div className="self-start">Username</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpUserNameRef} placeholder={profileData && profileData.userName}/>
                            
                            <div> {profileData.success === false && profileData.message}</div>
                            <div className="self-start">First name</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpFirstNameRef} placeholder={profileData && profileData.firstName}/>
                            
                            <div> {profileData.success === false && profileData.message}</div>
                            <div className="self-start">Last name</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpLastNameRef} placeholder={profileData && profileData.lastName}/>
                            <div className="self-start">Location</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpLocationRef} placeholder={profileData && profileData.location}/>
                            <div className="self-start">Bio</div>
                            <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpBioRef} placeholder={profileData && profileData.bio}/>
                            <button type="submit" className="w-1/4 my-2 p-2 text-white bg-slate-800 rounded-md self-start" ref={btnDoneRef}> Done </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )}

export default ProfileWidget;