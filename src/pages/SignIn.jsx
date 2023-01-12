import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { useLoginMutation } from "../features/auth/authApi";
import { userLoggedIn } from "../features/auth/authSlice";

export default function Login() {
    const user = useSelector(state => state.user);
    console.log(user);
    console.log(window);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [login, { data, isLoading, error: responseError }] =
        useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.access_token && data?.user) {
            navigate("/profile");
        }
    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        login({
            email,
            password,
        });
        // console.log(data)
        navigate("/profile");
    };

    return (
        <div className="App bg-gray-900 h-auto w-screen relative overflow-hidden flex justify-center items-center p-16">
            <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
            <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
            <Tilt>
                <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className='h-full flex flex-col justify-evenly items-center'>
                        <div className='text-white font-poppins text-2xl tracking-widest'>Login</div>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your email' className="font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter your password' className="max-w-xs font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide" />
                        <span className='text-warning ml-3'>Don't have any account?
                            <Link to="/signup" className='text-success ml-3'>Signup Now</Link>
                        </span>
                        <input type="submit" value="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-2 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80' />
                    </form>
                </div>
            </Tilt>
        </div>
    );
}
