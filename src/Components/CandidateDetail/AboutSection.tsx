import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";

const AboutSection = () => {
  const { candidateById } = useContext(CandidateContext);

  const cleanText = (textArray: string[]) => {
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

  const professionalDetails = candidateById?.professionalDetails;

  if (!professionalDetails || professionalDetails.length === 0) return null;
  return (
    <>
      <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
        <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
          About the candidate
        </h2>
        <p className="tw-text-gray-700 tw-text-md tw-leading-relaxed tw-mb-6">
          {cleanText(
            professionalDetails.map((p) => p.professionalDetailsAndSummary)
          )}
        </p>
      </div>
    </>
  );
};

export default AboutSection;
