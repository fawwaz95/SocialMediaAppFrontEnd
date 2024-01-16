import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const emailOrUsernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        console.log("LOGIN PAGE");
    })

    const saveUserCredentials = async () => {
        if (!emailOrUsernameRef.current.value || !passwordRef.current.value) {
            console.log("Please specify both email/username & password");
            return false;       //update the return value later.........
        }

        const userCredentials = {
            userName: emailOrUsernameRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const response = await fetch("http://localhost:3001/routes/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userCredentials.userName,
                    password: userCredentials.password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            console.log("The data");
            console.log(data);
            return data;
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
                <div className="self-start">Email</div>
                <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={emailOrUsernameRef} />
                <div className="self-start pt-2">Password</div>
                <input type="password" className="w-full p-2 mb-4 text-white bg-slate-800 rounded-md" ref={passwordRef} />
                <button type="submit" className="w-full py-2 text-white bg-blue-400 rounded-md" onClick={e => {
                    e.preventDefault()
                    saveUserCredentials()
                }}>Log in</button>
                <div className="text-xs text-slate-400"> <a href="#"> Forgot your password? </a> </div>
            </div>
        </div>
    )
}

export default LoginPage;