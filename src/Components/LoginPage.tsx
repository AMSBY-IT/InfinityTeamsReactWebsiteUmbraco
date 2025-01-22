import { useContext, useState } from "react";
import axios from "axios";
import { CandidateContext } from "../Provider/CandidateContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL

    const data = useContext(CandidateContext);
            if (!data){
                return <div>error data is undefined</div>  
              }
            const {setLogin}=data
            const navigate = useNavigate()

            

            const Login = async () => {
                if (!username || !password) {
                    alert("Please enter both email and password.");
                    return;
                }
        
                setLoading(true);
                try {
                    const response = await axios.post(
                        `${API_URL}/api/auth/login`,
                        { username, password }
                    );
                    const { token } = response.data;
                    localStorage.setItem("token", token);
                    setLogin(true);
                    navigate("/");
                } catch (error) {
                    console.error("Error during login:", error);
                    alert("Login failed. Please try again.");
                } finally {
                    setLoading(false);
                }
            };

    return (
        <>
        <div className="tw-w-full tw-h-screen">
            <div className="tw-flex tw-items-center tw-w-full tw-h-full tw-justify-center tw-bg-gray-50">
                <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-p-8">
                    <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                        <h1 className="tw-text-2xl tw-font-semibold">Login</h1>
                        <button className="tw-text-gray-400 hover:tw-text-gray-600">
                            {/* <X className="tw-h-5 tw-w-5" /> */}
                        </button>
                    </div>

                    <div className="tw-text-center tw-text-gray-500 tw-mb-6">
                        <div className="tw-relative">
                            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                                <div className="tw-w-full tw-border-t tw-border-gray-200"></div>
                            </div>
                            <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                                <span className="tw-px-2 tw-bg-white">Choose your Account Type</span>
                            </div>
                        </div>
                    </div>

                    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-6">
                        <button className="tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-rounded-md tw-text-white">
                            Candidate
                        </button>
                        <button className="tw-bg-gray-100 tw-py-3 tw-px-7 tw-rounded-md tw-text-gray-600">
                            Employer
                        </button>
                    </div>

                    <div className="tw-space-y-4">
                        <div>
                            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Your Email</label>
                            <input type="email" className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md" onChange={(e)=>setUserName(e.target.value)}/>
                        </div>

                        <div>
                            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Password</label>
                            <input type="password" className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <div className="tw-flex tw-items-center tw-justify-between">
                            <div className="tw-flex tw-items-center tw-space-x-2">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" className="tw-text-sm tw-text-gray-500">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="tw-text-sm tw-text-gray-500 hover:tw-text-gray-700">
                                Forgot Password?
                            </a>
                        </div>

                        <button className="tw-w-full tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-text-white tw-rounded-md" onClick={Login} disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                        </button>

                        <div className="tw-relative tw-my-6">
                            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                                <div className="tw-w-full tw-border-t tw-border-gray-200"></div>
                            </div>
                            <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                                <span className="tw-px-2 tw-bg-white tw-text-gray-500">Or</span>
                            </div>
                        </div>
                        <p className="tw-text-center tw-text-gray-500 tw-text-sm tw-mt-6">
                            Don't have an account?
                            <a href="/signup" className="tw-text-[#6039C8] tw-ml-1">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>

        </>
    );
};

export default LoginPage;
