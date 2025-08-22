import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import CandidateOverview from './CandidateOverview';
import NameSection from './NameSection';
import { useEffect } from 'react';

const CandidateInfo = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="tw-max-w-6xl tw-mx-auto tw-p-4">
                <NameSection />
            </div>

            <div className="tw-max-w-6xl tw-mx-auto tw-p-4">
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
                    {/* Left Column */}
                    <div className="tw-flex-1 tw-space-y-6">
                        {/* About the candidate */}
                        <AboutSection />
                        {/* Skills */}
                        <SkillsSection />
                    </div>

                    {/* Right Column */}
                    <div className="md:tw-w-80 tw-space-y-6">
                        {/* Salary */}
                        <CandidateOverview />
                    </div>
                </div>
            </div>

            <div className="tw-max-w-6xl tw-mx-auto tw-p-4">
                <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
                    <ExperienceSection />
                    <EducationSection />
                </div>
            </div>
        </>
    );
};

export default CandidateInfo;
