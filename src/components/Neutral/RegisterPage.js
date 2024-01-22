import { useRef, useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const fistNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isValidEmail, setIsValidEmail] = useState({});
    const [isValidUsername, setIsValidUsername] = useState({});
    const [isValidPassword, setIsValidPassword] = useState({});

    const checkValidEmail = (email)  => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateEmail = pattern.test(email) ? {success: true, message: "Email address is valid"} : {success: false, message: "Please provide a valid Email address"}
        setIsValidEmail(validateEmail);
    }

    const checkValidUsername = (userName)  => {
        const validateUsername = userName.length >= 6 ? {success: true, message: "Username meets required minimum length"} : 
                                                                {success: false, message: "Username must be at least 6 characters"};
        setIsValidUsername(validateUsername);
    }

    const checkValidPassword = (password)  => {
        const validatePassword = password.length > 6 ? {success: true, message: "Password meets required minimum length"} : 
                                                                {success: false, message: "Password must be at least 6 characters"};
        setIsValidPassword(validatePassword);
    }

    const registerUser = async () => {
        try {
            checkValidEmail(emailRef.current.value);
            checkValidUsername(userNameRef.current.value);
            checkValidPassword(passwordRef.current.value);

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

                navigate("/");
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
            <div className="self-start">First name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={fistNameRef} />
            <div className="self-start">Last name</div>
            <input type="text" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={lastNameRef} />

            {isValidUsername && isValidUsername.success === false && 
                <div className="self-start py-2 px-1 bg-red-600 text-white rounded-md">{isValidUsername.message}</div>
            }
            <div className="self-start">User name</div>
            <input type="text" className= "w-full p-2 text-blawhiteck bg-slate-800 rounded-md" ref={userNameRef} />

            {isValidEmail && isValidEmail.success === false && 
                <div className="self-start py-2 px-1 bg-red-600 text-white rounded-md">{isValidEmail.message}</div>
            }
            <div className="self-start">Email</div>
            <input type="email" className="w-full p-2 text-white bg-slate-800 rounded-md" ref={emailRef} />

            {isValidPassword && isValidPassword.success === false && 
                <div className="self-start py-2 px-1 bg-red-600 text-white rounded-md">{isValidPassword.message}</div>
            }
            <div className="self-start pt-2">Password</div>
            <input type="password" className= "w-full p-2 mb-4 text-white bg-slate-800 rounded-md" ref={passwordRef} />
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