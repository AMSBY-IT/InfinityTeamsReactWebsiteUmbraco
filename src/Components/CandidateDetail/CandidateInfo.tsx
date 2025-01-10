import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import CandidateOverview from "./CandidateOverview";

const CandidateInfo = () => {

    return (
        <>
            <div className="">
                <div className="tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl">
                    <div className="tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12 tw-pb-10">
                        <div className="tw-flex tw-gap-5 max-lg:tw-flex-col">
                            <div className="lg:tw-w-3/5 xl:tw-w-4/6">
                                <div className="rts__job__details">
                                    <AboutSection />
                                    <EducationSection />
                                    <ExperienceSection />
                                    <SkillsSection />
                                </div>
                            </div>

                            <div className="lg:tw-w-2/5 xl:tw-w-2/6 d-flex flex-column gap-40">
                                <CandidateOverview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateInfo;