import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";

const SkillsSection = () => {

    const {candidateById} = useContext(CandidateContext);
    return (
        <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
            <div className="tw-space-y-6">
           {candidateById.skills?.length > 0 && (
            <>
            <h2 className="tw-text-xl tw-font-semibold tw-mb-4">Skills</h2>
            <div className="tw-flex tw-flex-wrap tw-gap-2">
                {candidateById.skills.map((skill) => (
                    <div key={skill} className="tw-bg-gray-100 tw-py-1 tw-px-2 tw-rounded-md">
                        {skill}
                    </div>
                ))}
            </div>
            </>
           )} 

            {candidateById.tools?.length > 0 && (
                <>
                <h2 className="tw-text-xl tw-font-semibold tw-mb-4">Tools</h2>
            <div className="tw-flex tw-flex-wrap tw-gap-2">
                {candidateById.tools.map((t) => (
                    <div key={t} className="tw-bg-gray-100 tw-py-1 tw-px-2 tw-rounded-md">
                        {t}
                    </div>
                ))}
            </div></>
            )}

            {candidateById.methodology?.length > 0 && (
                <>
                <h2 className="tw-text-xl tw-font-semibold tw-mb-4">Methodology</h2>
            <div className="tw-flex tw-flex-wrap tw-gap-2">
                {candidateById.methodology.map((m) => (
                    <div key={m} className="tw-bg-gray-100 tw-py-1 tw-px-2 tw-rounded-md">
                        {m}
                    </div>
                ))}
            </div></>
            )}
            </div>
        </div>
    );
};

export default SkillsSection;
