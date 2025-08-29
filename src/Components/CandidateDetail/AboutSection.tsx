import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";

const AboutSection = () => {

  const {candidateById} = useContext(CandidateContext);

  const cleanText = (textArray:string[]) => {
    if (!textArray || textArray.length === 0) return "";
    
    // Join the array into a single string
    const combinedText = textArray.join(" ");
    
    // Replace HTML entities with their actual characters
    // Remove bullet points (•) and any leading/trailing spaces
    return combinedText
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
            {candidateById.professionalDetails?.length > 0 && (
              <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4">About the candidate</h2>
            <p className="tw-text-gray-700 tw-text-md tw-leading-relaxed tw-mb-6">
              {cleanText(candidateById.professionalDetails.map(p => p.professionalDetailsAndSummary))}
            </p>

            {/* <div className="tw-space-y-4">
              <h3 className="tw-font-medium">Responsibilities:</h3>
              <ul className="tw-list-disc tw-pl-6 tw-text-sm tw-text-gray-700 tw-space-y-2">
                <li>Deliver the project or solution as per the baseline scope, cost & schedule.</li>
                <li>Maintain high team & customer satisfaction levels.</li>
                <li>Ensure high quality delivery without any escalations.</li>
              </ul>
            </div>

            <button className="tw-mt-4 tw-text-blue-600 tw-text-sm tw-flex tw-items-center">
              <span className="tw-mr-1">See more</span>
              <span className="tw-text-blue-600">•••</span>
            </button> */}
               </div>
            )}
       </>
    )
}

export default AboutSection;
