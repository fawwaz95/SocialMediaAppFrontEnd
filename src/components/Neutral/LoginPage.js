import { useEffect } from "react";

const LoginPage = () => {
    useEffect(() => {
        console.log("LOGIN PAGE");
    })
    return(
        <div className="h-screen pt-20 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 bg-slate-500 rounded-md h-64 w-64 p-2">
                <div className="font-inter text-3xl ml-3 mr-4 text-blue-400 pb-4"> Moodz </div>
                <input type="text" className="w-full pl-2 text-black rounded-md" placeholder="email" />
                <input type="password"  className="w-full pl-2 mb-2 text-black rounded-md" placeholder="password"/>
                <button type="submit" className="w-full py-1 text-white bg-blue-400 rounded-md">Log in</button>
            </div>
        </div>
    )
}

export default LoginPage;