import { useLocation } from "react-router-dom";




const ExperienceSection = () => {
    const location = useLocation();
    const candidate = location.state?.candidate;
    return (
        <div id="experience" className="tw-mb-7">
            <h6 className="tw-text-2xl max-sm:tw-text-xl tw-font-semibold tw-mb-5 tw-capitalize">experience</h6>
            <ul className="timeline">
                <li className="tw-mb-7 tw-pl-7 tw-relative">
                    <div className="tw-w-3 tw-h-3 tw-bg-untitled-ui--primary600 tw-rounded-full tw-absolute tw-left-0 tw-top-2 tw-z-10"></div>
                    <span className="timeline__title tw-block tw-mb-1 tw-text-untitled-ui--primary600 tw-text-lg tw-font-medium">{candidate.currentMostRecentJobTitle}</span>
                    <span className="timeline__subtitle tw-block tw-text-[#7D8087] tw-italic tw-text-base">Reactheme   (2016- Present)</span>
                    <p className="tw-mt-2 fw-medium tw-text-lg tw-text-[#7D8087]">Software engineers&nbsp;apply engineering principles and knowledge of programming languages to build software solutions for end users.</p>
                    <div className="vertical-line tw-absolute tw-h-[110%] tw-w-[1px] tw-bg-black tw-opacity-20 tw-top-3 tw-left-[5px] tw-z-0"></div>
                </li>
            </ul>
        </div>
    )
}

export default ExperienceSection;