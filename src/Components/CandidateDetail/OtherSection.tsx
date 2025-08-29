import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";


const OtherSection = () => {

    const {candidateById} = useContext(CandidateContext);
    return (
        <div>
            <div>
                 <h2 className="tw-text-xl tw-font-semibold tw-mb-6">Others</h2>
                 <div className="tw-space-y-4">
                <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.noticePeriod ? candidateById.noticePeriod : '-'} days</p>
                            <p className="tw-text-sm tw-text-gray-500">Notice Period</p>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.remarks ? candidateById.remarks : '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Remark</p>
                        </div>
                    </div>

                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.interested ? candidateById.interested : '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Interested</p>
                        </div>
                    </div>
                    
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.lastContactedDate
      ? new Date(candidateById.lastContactedDate).toLocaleDateString('en-GB')
      : '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Last Contacted Date</p>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.cctc ? candidateById.cctc : '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Ctc</p>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-start tw-gap-3">
                        <div>
                            <p className="tw-font-medium tw-text-md">{candidateById.ectc ? candidateById.ectc : '-'}</p>
                            <p className="tw-text-sm tw-text-gray-500">Ectc</p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default OtherSection;
