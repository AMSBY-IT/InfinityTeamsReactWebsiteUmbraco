import { useLocation } from "react-router-dom";




const SkillsSection = () => {
    const location = useLocation();
    const candidate = location.state?.candidate;
    return (
        <div id="skill" className="tw-mb-7">
            <h6 className="tw-text-2xl max-sm:tw-text-xl tw-font-semibold tw-mb-5">Skills and Experience</h6>
            <div className="job__tags job__details__tags tw-flex tw-items-center tw-gap-2 tw-flex-wrap">

                {candidate.skills && candidate.skills.length > 0 ? candidate.skills.map((skill:string) => (
                    <a className="tw-px-3 tw-py-2 tw-rounded-[4px] tw-whitespace-nowrap tw-bg-untitled-ui--primary600 tw-flex tw-leading-4 tw-capitalize tw-text-untitled-ui--primary100 tw-text-[14px]">{skill}</a>))
                    : <span>No skills listed</span>
                }
                {/* <a href="#" className="job__tag tw-py-[5px] tw-px-[10px] tw-bg-untitled-ui--primary600 tw-rounded-md tw-text-white">@skill</a> */}

            </div>
        </div>
    )
}

export default SkillsSection;