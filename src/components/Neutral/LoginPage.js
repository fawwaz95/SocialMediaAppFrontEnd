import { useEffect } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    useEffect(() => {
        console.log("LOGIN PAGE");
    })
    return(
        <div className="h-screen flex flex-col items-center justify-center text-slate-400">
            <Link to="/Register"> <div className="absolute top-20 right-0 p-4 text-white"> Register <img src="/images/rightArrow_Icon.svg" className="h-8"></img></div> </Link>
            <div className="flex flex-col items-center justify-center gap-2 w-96 p-2">
                <div className="self-start">
                    <div className="text-3xl text-blue-400 py-8"> Login </div>
                </div>
                {/*<div className="font-inter text-3xl ml-3 mr-4 text-blue-400 pb-4"> Moodz </div>8*/}
                <div className="self-start">Email</div>
                <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" />
                <div className="self-start pt-2">Password</div>
                <input type="password"  className="w-full p-2 mb-4 text-white bg-slate-800 rounded-md" />
                <button type="submit" className="w-full py-2 text-white bg-blue-400 rounded-md">Log in</button>
                <div className="text-xs text-slate-400"> <a href="#"> Forgot your password? </a> </div>
            </div>
        </div>
    )
}

export default LoginPage;