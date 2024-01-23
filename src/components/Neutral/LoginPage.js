import { useEffect, useRef, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Homepage from "../Neutral/HomePage";

const LoginPage = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [loginInfo, setLoginInfo] = useState({});

    useEffect(() => {
        if (loginInfo.success === true) {
            console.log("Login Successful");
            console.log(loginInfo);
            navigate('/');
          }
    }, [loginInfo])

    const loginToApp = async () => {
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
            setLoginInfo(data);
            
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
                {loginInfo && loginInfo.success === false && 
                    <div className="self-start py-2 px-1 bg-red-600 text-white rounded-md">{loginInfo.message}</div>
                }
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