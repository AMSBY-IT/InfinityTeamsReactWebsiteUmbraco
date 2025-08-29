import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import epxIcon from "../../assets/portfolio.png"

const ExperienceSection = () => {

    const {candidateById} = useContext(CandidateContext);

    const cleanText = (text:string) => {
  if (!text) return "";
  
  // Replace HTML entities with their actual characters
  // Remove bullet points (•) and any leading/trailing spaces
  return text
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/•/g, "") // Remove bullet points
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim(); // Remove leading/trailing spaces
};
    return (
        <>
            {candidateById.workExperienceDetails.length > 0 && (
                <div className="tw-mb-8">
                <h2 className="tw-text-xl tw-font-semibold tw-mb-6">Work experience</h2>

            <div className="tw-space-y-6">
                
                {candidateById.workExperienceDetails.map((w)=>{
                    return(
                        <div className="tw-flex tw-gap-4">
                    <div className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-rounded-full tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-text-white">
                        <img src={epxIcon} alt="" className="tw-w-6 tw-h-6"/>
                    </div>
                    <div className="tw-flex-grow">
                        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">{w.companyName}</h3>
                        {/* <div className="tw-flex tw-justify-between">
                            <p className="tw-text-gray-700">London • Dribble Inc.</p>
                            <p className="tw-text-gray-700">2018 - Present</p>
                        </div> */}
                        <p className="tw-text-gray-500 tw-mt-1">
                            {cleanText(w.experienceDetails)}
                        </p>
                    </div>
                </div>
                    )
                })}

            </div>
                </div>
            )}
           </> 
        
    );
};

export default ExperienceSection;
