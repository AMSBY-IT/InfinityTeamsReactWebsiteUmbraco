import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import CandidateOverview from './CandidateOverview';
import NameSection from './NameSection';
import { useContext, useEffect } from 'react';
import CertificateSection from './CertificateSection';
import OtherSection from './OtherSection';
import { CandidateContext } from '../../Provider/CandidateContext';
import BackButton from '../Shared/BackButton';
import { getCandidateById } from '../../api/services';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

const CandidateInfo = () => {
    const { id } = useParams<{ id: string }>();
    const {candidateById,dispatch} = useContext(CandidateContext);


  useEffect(() => {
    const fetchCandidate = async () => {
    if (!id) return;

    const candidateId = parseInt(id);
    const data = await getCandidateById(candidateId);
    dispatch({ type: "SET_CANDIDATEBYID", payload: data });
      
    };

    fetchCandidate();
  }, [id, dispatch]);

  useEffect(() => {
        return () => {
            dispatch({ type: "SET_CANDIDATEBYID", payload: null });
        };
    }, [dispatch]);
  

    const hasSections = (
        (candidateById?.workExperienceDetails?.length ?? 0) > 0 ||
        (candidateById?.eductionDetails?.length ?? 0) > 0 ||
        (candidateById?.certifications?.length ?? 0) > 0
    );
  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!candidateById) {
    return <Loader/>;
  }

    return (
        <>
        <div className="tw-max-w-6xl tw-mx-auto tw-p-4">
                <BackButton />
            </div>
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
                {hasSections && (
                    <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
                    <ExperienceSection />
                    <EducationSection />
                    <CertificateSection/>
                </div>
                )}
            </div>
            <div className="tw-max-w-6xl tw-mx-auto tw-p-4">
                <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
                    <OtherSection/>
                </div>
            </div>
        </>
    );
};

export default CandidateInfo;
