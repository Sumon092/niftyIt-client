import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logoImage from "../assets/images/lws-logo-light.svg";
// import Error from "../components/ui/Error";
import Tilt from 'react-parallax-tilt';
import { useRegisterMutation } from "../features/auth/authApi";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const [register, { data, isLoading, error: responseError }] =
        useRegisterMutation();

    const navigate = useNavigate();


    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.accessToken && data?.user) {
            // navigate("/profile");
        }
    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (confirmPassword !== password) {
            setError("Passwords do not match");
        } else {
            register({
                name,
                email,
                password,
            });
        }
        navigate("/profile")


    };

    return (
        <>
            <div className="bg-gray-900 h-auto w-screen relative overflow-hidden flex justify-center items-center p-16">
                <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-white-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
                <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
                <Tilt>
                    <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className='h-full flex flex-col justify-evenly items-center'>
                            <div className='text-white font-poppins text-2xl tracking-widest'>Signup</div>
                            <input value={name}
                                onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' className="font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className="font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Confirm password' className="font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password" placeholder='Confirm Password' className="font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                            <span className='text-secondary ml-3'>Already have an account?
                                <Link to="/login" className='text-success ml-3'>Login</Link>
                            </span>
                            <input type="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-2 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 ' />


                        </form>
                    </div>
                </Tilt>
            </div>
        </>
    );
}
