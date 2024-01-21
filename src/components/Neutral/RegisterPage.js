import { useRef } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const fistNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const registerUser = async () => {
        try {
            const registerUser = {
                firstName: fistNameRef.current.value,
                lastName: lastNameRef.current.value,
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

            const postMethod = {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: registerUser.firstName,
                    lastName: registerUser.lastName,
                    userName: registerUser.userName,
                    email: registerUser.email,
                    password: registerUser.password,
                }),
            }

            const response = await fetch("http://localhost:3001/routes/register", postMethod);

            if (!response.ok) {
                console.error("Http error: " + response.status);
            }

            const jsonData = await response.json();

            if (jsonData && jsonData.success === true) {
                console.log("User registered!!!");
                console.log(jsonData);
            }
    }catch (error) {
        console.error("Error registering user.......");
        console.error(error.status + " " + error.message);
    }
}

return (
    <div className="h-screen flex flex-col items-center justify-center text-slate-400">
        <div className="absolute top-20 right-0 p-4 text-white">
            <Link to="/Login" className="flex items-center">
                <div className="mr-2">Login</div>
                <img src="/images/rightArrow_Icon.svg" className="h-8" alt="Right arrow icon" />
            </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-96 p-2">
            <div className="self-start">
                <div className="text-3xl text-blue-400 py-8"> Register </div>
            </div>
            <div className="self-start">First name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={fistNameRef} />
            <div className="self-start">Last name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={lastNameRef} />
            <div className="self-start">User name</div>
            <input type="text" className="w-full p-2 text-blawhiteck bg-slate-800 rounded-md" ref={userNameRef} />
            <div className="self-start">Email</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={emailRef} />
            <div className="self-start pt-2">Password</div>
            <input type="password" className="w-full p-2 mb-4 text-white bg-slate-800 rounded-md" ref={passwordRef} />
            <button type="submit" className="w-full py-2 text-white bg-blue-400 rounded-md" onClick={(e) => {
                e.preventDefault()
                registerUser()
            }}>
                Register</button>
        </div>
    </div>
)
}

export default RegisterPage;