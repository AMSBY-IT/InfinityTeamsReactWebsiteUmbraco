const EducationSection = () => {
    return (
        <div>
            <h2 className="tw-text-xl tw-font-semibold tw-mb-6">Education</h2>

            <div className="tw-flex tw-gap-4">
                <div className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-red-900 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="tw-h-6 tw-w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                </div>
                <div className="tw-flex-grow">
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">Harvard University</h3>
                    <div className="tw-flex tw-justify-between">
                        <p className="tw-text-gray-700">London • Business Development</p>
                        <p className="tw-text-gray-700">1994 - 1998</p>
                    </div>
                    <p className="tw-text-gray-500 tw-mt-1">
                        Healthcare Interest — become an expert on emerging healthcare programs and excited to speak with providers
                        about the future of healthcare
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
