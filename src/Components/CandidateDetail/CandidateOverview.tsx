import { Mail, Briefcase, Activity, Phone, AudioLines } from "lucide-react";
import { useContext } from "react";

import { CandidateContext } from "../../Provider/CandidateContext";

const CandidateOverview = () => {
    const {candidateById} = useContext(CandidateContext);
    return (
        <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
            <div className="tw-space-y-6">
                {/* <div>
                    <h2 className="tw-text-xl tw-font-semibold">$35,700 — $37,700</h2>
                    <p className="tw-text-gray-500 tw-text-sm">Avg. salary</p>
                </div> */}

                {/* Job Details */}
                <div className="tw-space-y-4">
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Mail className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById?.emailAddress ?? '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Email</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Briefcase className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById?.sector ?? '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Industry</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Phone className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById?.contactNumber ?? '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Contact No.</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <Activity className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById?.totalYearsOfExperience ?? '-'} years</p>
                            <p className="tw-text-sm tw-text-gray-500">Experience</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div className="tw-mt-1 tw-text-gray-400">
                            <AudioLines className="tw-h-5 tw-w-5" />
                        </div>
                        <div>
                            <p className="tw-font-medium tw-text-md">{
    candidateById?.communicationSkills
      ? (() => {
          try {
            const parsed = JSON.parse(candidateById.communicationSkills);
            return parsed[0]?.split(' ')[0] ?? '-';
          } catch {
            return '-';
          }
        })()
      : '-'
  }</p>
                            <p className="tw-text-sm tw-text-gray-500">Communication</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateOverview;
