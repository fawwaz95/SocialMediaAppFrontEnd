import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import {loginUser} from '../../actions/loginAction';


const EditProfilePage = () => {
    const userInfoState = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inpUserNameRef = useRef();
    const inpFirstNameRef = useRef();
    const inpLastNameRef = useRef();
    const inpLocationRef = useRef();
    const inpBioRef = useRef();
    const btnDoneRef = useRef();

    const [errorMsg, setErrorMsg] = useState({});


    useEffect(() => {
        console.log("EditProfilePage");
        setEventListeners();

        return(() =>{
            console.log("Emptying errorMsg hook....");
            setErrorMsg("")
        })
    },[userInfoState]);

    const handleKeyDown = async (event) => {
        if(event.key === "Enter"){
            event.preventDefault();
            await editProfile();
        }
    }

    const handleClick = async () => {
        await editProfile();
    }

    const setEventListeners = () => {
        inpUserNameRef.current.addEventListener("keydown", handleKeyDown);
        inpFirstNameRef.current.addEventListener("keydown", handleKeyDown);
        inpLastNameRef.current.addEventListener("keydown", handleKeyDown);
        inpLocationRef.current.addEventListener("keydown", handleKeyDown);
        inpBioRef.current.addEventListener("keydown", handleKeyDown);
        btnDoneRef.current.addEventListener("keydown", handleKeyDown);
        btnDoneRef.current.addEventListener("click", handleClick);
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
            const data = await response.json();

            if(!data._id){
                throw {success: data.success, message: data.message}
            }

            dispatch(loginUser(data))
            navigate("/");

        }catch(error){
            console.log("Heres the error editProfile....handle it ");
            console.log(error);
            setErrorMsg(error);
        }
    }

    return(
        <div className="fixed h-screen bg-zinc-900 w-full flex justify-center items-center">
            <div>
                <div className="fixed right-4 pt-4"> <Link to="/"><img src="images/close_icon.svg" className="h-4"/> </Link></div>
                <div className="flex flex-col items-center justify-center gap-2 w-96 p-2 text-white text-xs">
                    <div className="self-start">
                        <div className="text-xl text-blue-400 py-4"> Edit Profile </div>
                    </div>

                    <div className="text-white"> {errorMsg.success === false && errorMsg.message}</div>
                    <div className="self-start">Username</div>
                    <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpUserNameRef} placeholder={userInfoState.userInfo.userName}/>
                    
                    <div className="self-start">First name</div>
                    <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpFirstNameRef} placeholder={userInfoState.userInfo.firstName}/>
                    
                    <div className="self-start">Last name</div>
                    <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpLastNameRef} placeholder={userInfoState.userInfo.lastName} />
                    <div className="self-start">Location</div>
                    <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpLocationRef} placeholder={userInfoState.userInfo.location} />
                    <div className="self-start">Bio</div>
                    <input type="text" className="w-full p-1 text-white bg-slate-800 rounded-md" ref={inpBioRef} placeholder={userInfoState.userInfo.bio} />
                    <button type="submit" className="w-1/4 my-2 p-2 text-white bg-slate-800 rounded-md self-start" ref={btnDoneRef}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage;