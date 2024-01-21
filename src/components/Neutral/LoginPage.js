import { useEffect, useRef } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Homepage from "../Neutral/HomePage";

const LoginPage = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        console.log("LOGIN PAGE");
    })

    const loginToApp = async () => {
        if (!usernameRef.current.value || !passwordRef.current.value) {
            console.log("Please specify both email/username & password");
            return false;
        }

        const userCredentials = {
            userName: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const postMethod = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userCredentials.userName,
                    password: userCredentials.password,
                }),
            }
            
            const response = await fetch("http://localhost:3001/routes/login", postMethod);

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if(data.success === false){
                console.log("Invalid user......");
                console.log(data.message); //Need to tell user, maybe show the username field in red?
            }else{
                console.log("Login Successful");
                console.log(data);
                navigate('/');
            }
            
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }

    }

    return (
        <div className="h-screen flex flex-col items-center justify-center text-slate-400">
            <div className="absolute top-20 right-0 p-4 text-white">
                <Link to="/Register" className="flex items-center">
                    <div className="mr-2">Register</div>
                    <img src="/images/rightArrow_Icon.svg" className="h-8" alt="Right arrow icon" />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-96 p-2">
                <div className="self-start">
                    <div className="text-3xl text-blue-400 py-8"> Login </div>
                </div>
                {/*<div className="font-inter text-3xl ml-3 mr-4 text-blue-400 pb-4"> Moodz </div>8*/}
                <div className="self-start">Username</div>
                <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={usernameRef} />
                <div className="self-start pt-2">Password</div>
                <input type="password" className="w-full p-2 mb-4 text-white bg-slate-800 rounded-md" ref={passwordRef} />
                <button type="submit" className="w-full py-2 text-white bg-blue-400 rounded-md" onClick={(e) => {
                    e.preventDefault()
                    loginToApp()
                }}>Log in</button>
                <div className="text-xs text-slate-400"> <a href="#"> Forgot your password? </a> </div>
            </div>
        </div>
    )
}

export default LoginPage;