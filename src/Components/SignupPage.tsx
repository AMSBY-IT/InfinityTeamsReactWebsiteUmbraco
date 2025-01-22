

const SignupPage = () => {
    

    return (
        <>
        <div className="tw-w-full tw-h-screen">
            <div className="tw-flex tw-items-center tw-w-full tw-h-full tw-justify-center tw-bg-gray-50">
                <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-p-8">
                    <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                        <h1 className="tw-text-2xl tw-font-semibold">Create a Account</h1>
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
                        <button className="tw-bg-[#6039C8] tw-py-3 tw-px-7  tw-text-white tw-rounded-md">
                            Candidate
                        </button>
                        <button className="tw-bg-gray-100 tw-py-3 tw-px-7 tw-text-gray-600 tw-rounded-md">
                            Employer
                        </button>
                    </div>

                    <div className="tw-space-y-4">
                        <div>
                            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Your Email</label>
                            <input type="email" className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md"/>
                        </div>

                        <div>
                            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Password</label>
                            <input type="password" className="tw-w-full tw-outline-none tw-py-3 tw-px-3 tw-border tw-rounded-md"/>
                        </div>

                        <div className="tw-flex tw-items-center tw-justify-between">
                            <div className="tw-flex tw-items-center tw-space-x-2">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" className="tw-text-sm tw-text-gray-500">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <button className="tw-w-full tw-bg-[#6039C8] tw-py-3 tw-px-7 tw-text-white tw-rounded-md">
                            SignUp
                        </button>

                        <div className="tw-relative tw-my-6">
                            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                                <div className="tw-w-full tw-border-t tw-border-gray-200"></div>
                            </div>
                            <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                                <span className="tw-px-2 tw-bg-white tw-text-gray-500">Or</span>
                            </div>
                        </div>

                        {/* <div className="tw-grid tw-grid-cols-2 max-sm:tw-grid-cols-1 tw-gap-4">
                            <button className="tw-w-full tw-flex tw-items-center tw-gap-2 tw-py-3 tw-px-2 tw-text-sm tw-bg-gray-100 tw-rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-5" viewBox="0 0 256 262"><rect fill="none"/><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                                Continue with Google
                            </button>
                            <button className="tw-w-full tw-flex tw-items-center tw-gap-2 tw-py-3 tw-px-2 tw-text-sm tw-bg-gray-100 tw-rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-5" viewBox="0 0 256 256"><rect fill="none"/><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
                                Continue with Facebook
                            </button>
                        </div> */}

                        <p className="tw-text-center tw-text-gray-500 tw-text-sm tw-mt-6">
                            Do have an account?
                            <a href="/login" className="tw-text-[#6039C8] tw-ml-1">
                                login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>

        </>
    );
};

export default SignupPage;
