import { Mail, Briefcase, Clock, Activity } from "lucide-react";

const CandidateOverview = () => {
    return (
        <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
            <div className="tw-space-y-6">
                <div>
                    <h2 className="tw-text-xl tw-font-semibold">$35,700 — $37,700</h2>
                    <p className="tw-text-gray-500 tw-text-sm">Avg. salary</p>
                </div>

                {/* Job Details */}
                <div className="tw-space-y-4">
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Mail className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">jobs@microsoft.com</p>
                            <p className="tw-text-sm tw-text-gray-500">Email</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Briefcase className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">Software and hardware</p>
                            <p className="tw-text-sm tw-text-gray-500">Industry</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Clock className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">Full-time</p>
                            <p className="tw-text-sm tw-text-gray-500">Employment Type</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Activity className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">Information technology</p>
                            <p className="tw-text-sm tw-text-gray-500">Job Functions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateOverview;
