import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/loginAction";

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inpFirstNameRef = useRef();
    const inpLastNameRef = useRef();
    const inpUserNameRef = useRef();
    const inpEmailRef = useRef();
    const inpPasswordRef = useRef();
    const btnRegisterRef = useRef();

    const [errorMessage, setErrorMessage] = useState({});

    useEffect( () => {
        addEventListeners();
    })

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            console.log("Clicked key")
            e.preventDefault(); 
            registerUser();
        }
    }

    const handleClick = () => {
        registerUser();
    }

    const addEventListeners = () => {
        inpFirstNameRef.current.addEventListener("keydown", handleKeyDown);
        inpLastNameRef.current.addEventListener("keydown", handleKeyDown);
        inpUserNameRef.current.addEventListener("keydown", handleKeyDown);
        inpUserNameRef.current.addEventListener("keydown", handleKeyDown);
        inpEmailRef.current.addEventListener("keydown", handleKeyDown);
        inpPasswordRef.current.addEventListener("keydown", handleKeyDown);
        btnRegisterRef.current.addEventListener("click", handleClick);
    }

    const registerUser = async () => {
        try {
            const registerUser = {
                firstName: inpFirstNameRef.current.value,
                lastName: inpLastNameRef.current.value,
                userName: inpUserNameRef.current.value,
                email: inpEmailRef.current.value,
                password: inpPasswordRef.current.value
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
                navigate("/");
                dispatch(loginUser(jsonData));            
            }else{
                setErrorMessage(jsonData);
            }
    }catch (error) {
        console.error("Error registering user.......");
        console.error(error.status + " " + error.message);
    }
}

return (
    <div className="h-screen pt-20 flex flex-col items-center justify-center text-slate-400 sm:h-auto">
        <div className="absolute top-20 right-0 p-4 text-white">
            <Link to="/Login" className="flex items-center">
                <div className="mr-2">Login</div>
                <img src="/images/rightArrow_Icon.svg" className="h-8" alt="Right arrow icon" />
            </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-auto p-2 sm:w-96">
            <div className="self-start">
                <div className="text-3xl text-blue-400 py-8"> Register </div>
            </div>
            {errorMessage && errorMessage.success === false && 
                <div className="self-start py-2 px-1 bg-red-600 text-white rounded-md">{errorMessage.message}</div>
            }
            <div className="self-start">First name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={inpFirstNameRef} />
            <div className="self-start">Last name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={inpLastNameRef} />
            <div className="self-start">User name</div>
            <input type="text" className= "w-full p-2 text-blawhiteck bg-slate-800 rounded-md" ref={inpUserNameRef} />
            <div className="self-start">Email</div>
            <input type="email" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={inpEmailRef} />
            <div className="self-start pt-2">Password</div>
            <input type="password" className= "w-full p-2 mb-4 text-white bg-slate-800 rounded-md" ref={inpPasswordRef} />
            <button type="submit" className="w-full py-2 text-white bg-blue-400 rounded-md" ref={btnRegisterRef}>Register</button>
        </div>
    </div>
)
}

export default RegisterPage;